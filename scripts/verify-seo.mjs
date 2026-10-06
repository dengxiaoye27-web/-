import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const origin = 'https://www.wandtung.com';
const root = '.next/server/app';
const locales = ['en', 'ar', 'fr', 'es', 'ru', 'zh'];
const counts = { pages: 0, products: 0, articles: 0, faqAnswers: 0, productsWithArticles: 0, productsWithProjects: 0 };
const escapeHtml = (text) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
const normalize = (text) => text.replace(/\s+/g, ' ').trim();
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : file.endsWith('.html') ? [file] : [];
  });
}
for (const locale of locales) {
  const files = [path.join(root, `${locale}.html`), ...walk(path.join(root, locale))];
  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap((match) => JSON.parse(match[1]));
    const body = html.replace(/<script\b[^>]*>.*?<\/script>/gs, '');
    const route = file === `${root}/${locale}.html` ? '' : '/' + path.relative(`${root}/${locale}`, file).replace(/\.html$/, '');
    const url = origin + (locale === 'en' ? '' : `/${locale}`) + route;
    counts.pages++;
    const org = schemas.find((item) => item['@type'] === 'Organization');
    assert.equal(org?.['@id'], `${origin}/#organization`, file);
    assert.equal(org.logo, `${origin}/logo_wandtung.png`, file);
    if (!route.startsWith('/legal/')) {
      const breadcrumb = schemas.find((item) => item['@type'] === 'BreadcrumbList');
      for (const item of breadcrumb?.itemListElement ?? []) {
        assert.ok(item.item.startsWith(origin + (locale === 'en' ? '/' : `/${locale}`)), `${file}: breadcrumb language`);
      }
    }
    for (const schema of schemas) {
      if (schema['@type'] === 'Product') {
        counts.products++;
        // No published catalog price or fixed stock position exists, so
        // offers (if present) must not fabricate either one.
        if (schema.offers) {
          assert.ok(!('price' in schema.offers) && !('priceCurrency' in schema.offers), `${file}: fabricated offer price`);
        }
        assert.equal(schema.url, url, `${file}: product URL`);
        assert.equal(schema['@id'], `${origin}${route}#product`, `${file}: stable product ID`);
        assert.equal(schema.manufacturer['@id'], org['@id'], file);
        for (const image of schema.image ?? []) {
          assert.ok(fs.existsSync(path.join('public', new URL(image).pathname)), `${file}: missing image ${image}`);
        }
        // Count contextual links, excluding header/footer navigation.
        const content = body.replace(/<header\b[^>]*>.*?<\/header>/gs, '').replace(/<footer\b[^>]*>.*?<\/footer>/gs, '');
        if (/href="[^"#]*\/resources\/blog\//.test(content)) counts.productsWithArticles++;
        if (/href="[^"#]*\/projects\//.test(content)) counts.productsWithProjects++;
      }
      if (schema['@type'] === 'Article') {
        counts.articles++;
        assert.equal(schema.mainEntityOfPage, url, `${file}: article URL`);
        assert.equal(schema.publisher['@id'], org['@id'], file);
      }
      if (schema['@type'] === 'FAQPage') {
        for (const question of schema.mainEntity) {
          counts.faqAnswers++;
          assert.ok(normalize(body).includes(normalize(escapeHtml(question.acceptedAnswer.text))), `${file}: FAQ answer absent from server HTML: ${question.name}`);
        }
        assert.equal((body.match(/<details\b/g) ?? []).length, schema.mainEntity.length, `${file}: FAQ disclosure count`);
      }
    }
    if (locale !== 'en' && ['', '/products', '/solutions', '/projects', '/resources', '/about', '/contact'].includes(route)) {
      const englishFile = route ? `${root}/en${route}.html` : `${root}/en.html`;
      const english = fs.readFileSync(englishFile, 'utf8');
      assert.notEqual(html.match(/<title>(.*?)<\/title>/s)?.[1], english.match(/<title>(.*?)<\/title>/s)?.[1], `${file}: English title remains`);
    }
  }
}
assert.equal(counts.products, 378);
assert.equal(counts.articles, 78);
assert.equal(counts.faqAnswers, 921);
assert.ok(counts.productsWithArticles > 12);
assert.ok(counts.productsWithProjects > 0);
console.log(JSON.stringify(counts, null, 2));
