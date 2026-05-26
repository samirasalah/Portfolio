#!/usr/bin/env python3
"""Wire data-i18n attributes across index.html."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
path = ROOT / "index.html"
html = path.read_text(encoding="utf-8")


def wire_project_block(block: str, pid: str, has_role: bool = True) -> str:
    if 'data-i18n-project="' not in block.split("work-domain")[1][:120]:
        block = block.replace(
            '<span class="work-domain">',
            f'<span class="work-domain" data-i18n-project="{pid}" data-i18n-field="domain">',
            1,
        )
    if has_role and 'class="work-role"' in block:
        block = re.sub(
            r'<p class="work-role"(?![^>]*data-i18n-project)',
            f'<p class="work-role" data-i18n-project="{pid}" data-i18n-field="role"',
            block,
            count=1,
        )
    block = re.sub(
        r'<p class="work-value"(?![^>]*data-i18n-project)',
        f'<p class="work-value" data-i18n-project="{pid}" data-i18n-field="value" data-i18n-html="true"',
        block,
        count=1,
    )
    block = block.replace(
        "<li><strong>Challenge</strong> ",
        f'<li><strong class="work-detail-label" data-i18n="label.challenge">Challenge</strong>'
        f'<span class="work-detail-body" data-i18n-project="{pid}" data-i18n-field="c" data-i18n-html="true"> ',
    )
    block = block.replace(
        "<li><strong>Delivered</strong> ",
        f'<li><strong class="work-detail-label" data-i18n="label.delivered">Delivered</strong>'
        f'<span class="work-detail-body" data-i18n-project="{pid}" data-i18n-field="d" data-i18n-html="true"> ',
    )
    block = block.replace(
        "<li><strong>Impact</strong> ",
        f'<li><strong class="work-detail-label" data-i18n="label.impact">Impact</strong>'
        f'<span class="work-detail-body" data-i18n-project="{pid}" data-i18n-field="i" data-i18n-html="true"> ',
    )
    for label, key in (
        ("Challenge", "label.challenge"),
        ("Delivered", "label.delivered"),
        ("Impact", "label.impact"),
        ("Examples", "label.examples"),
    ):
        block = block.replace(
            f'<strong class="work-detail-label">{label}</strong>',
            f'<strong class="work-detail-label" data-i18n="{key}">{label}</strong>',
        )
    field_idx = 0
    fields = ["c", "d", "i"]
    out = []
    pos = 0
    for m in re.finditer(r"<span class=\"work-detail-body\"([^>]*)>", block):
        out.append(block[pos : m.start()])
        attrs = m.group(1)
        if "data-i18n-project" not in attrs and field_idx < len(fields):
            f = fields[field_idx]
            out.append(
                f'<span class="work-detail-body" data-i18n-project="{pid}" '
                f'data-i18n-field="{f}" data-i18n-html="true"{attrs}>'
            )
            field_idx += 1
        else:
            out.append(m.group(0))
        pos = m.end()
    out.append(block[pos:])
    block = "".join(out)
    # Close unclosed spans for police-style items
    block = re.sub(
        r"(data-i18n-field=\"[cdi]\" data-i18n-html=\"true\">)([^<]+)</li>",
        r"\1\2</span></li>",
        block,
    )
    return block


def replace_article(html: str, art_id: str, pid: str, **kwargs) -> str:
    pat = rf'(<article class="work-card[^"]*" id="{re.escape(art_id)}"[^>]*>.*?</article>)'
    m = re.search(pat, html, re.DOTALL)
    if not m:
        print(f"WARN: article id={art_id}")
        return html
    wired = wire_project_block(m.group(1), pid, **kwargs)
    return html[: m.start()] + wired + html[m.end() :]


# Section headers & contact (static replacements)
STATIC = [
    (
        '<p class="section-label">Freelance advantage</p>\n          <h2 class="section-title">Ship faster',
        '<p class="section-label" data-i18n="ai.label">Freelance advantage</p>\n          <h2 class="section-title" data-i18n="ai.title">Ship faster',
    ),
    (
        '<p class="section-intro">AI speeds up execution',
        '<p class="section-intro" data-i18n="ai.intro">AI speeds up execution',
    ),
    (
        '<p class="section-label">Core expertise</p>\n          <h2 class="section-title">What you get',
        '<p class="section-label" data-i18n="expertise.label">Core expertise</p>\n          <h2 class="section-title" data-i18n="expertise.title">What you get',
    ),
    (
        '<p class="section-intro">End-to-end mobile delivery — scoping, build, release, and handover',
        '<p class="section-intro" data-i18n="expertise.intro">End-to-end mobile delivery — scoping, build, release, and handover',
    ),
    (
        '<p class="section-label">Case work</p>\n          <h2 class="section-title">Problems solved',
        '<p class="section-label" data-i18n="work.label">Case work</p>\n          <h2 class="section-title" data-i18n="work.title">Problems solved',
    ),
    (
        '<p class="section-intro">Each card covers context, delivery, impact',
        '<p class="section-intro" data-i18n="work.intro">Each card covers context, delivery, impact',
    ),
    (
        '<h3 class="work-group-title">Enterprise &amp; government</h3>',
        '<h3 class="work-group-title" data-i18n="work.g1">Enterprise &amp; government</h3>',
    ),
    (
        '<h3 class="work-group-title">PROXYM Middle East · 2024–present · UAE public sector</h3>\n        <p class="work-group-note">Software Team Lead Android · PROXYM Middle East</p>',
        '<h3 class="work-group-title" data-i18n="work.g2">PROXYM Middle East · 2024–present · UAE public sector</h3>\n        <p class="work-group-note" data-i18n="work.g2note">Software Team Lead Android · PROXYM Middle East</p>',
    ),
    (
        '<h3 class="work-group-title">Product &amp; scale · consumer &amp; vertical apps</h3>',
        '<h3 class="work-group-title" data-i18n="work.g3">Product &amp; scale · consumer &amp; vertical apps</h3>',
    ),
    (
        '<p class="section-label">Career</p>\n          <h2 class="section-title">Experience</h2>\n          <p class="section-intro">Timeline of roles',
        '<p class="section-label" data-i18n="exp.label">Career</p>\n          <h2 class="section-title" data-i18n="exp.title">Experience</h2>\n          <p class="section-intro" data-i18n="exp.intro" data-i18n-html="true">Timeline of roles',
    ),
    (
        '<p class="section-label">Hire me</p>\n          <h2 class="section-title">Let\'s scope',
        '<p class="section-label" data-i18n="contact.label">Hire me</p>\n          <h2 class="section-title" data-i18n="contact.title">Let\'s scope',
    ),
    (
        '<p class="section-intro">Freelance missions, fixed phases',
        '<p class="section-intro" data-i18n="contact.intro">Freelance missions, fixed phases',
    ),
]
for old, new in STATIC:
    if old not in html:
        print("WARN static:", old[:50])
    html = html.replace(old, new, 1)

html = html.replace(
    '<ul class="hero-proof" aria-label="Key metrics">',
    '<ul class="hero-proof" aria-label="Key metrics" data-i18n-aria="heroProofAria">',
)
html = html.replace(
    '<aside class="hero-panel" aria-label="AI delivery impact">',
    '<aside class="hero-panel" aria-label="AI delivery impact" data-i18n-aria="heroPanelAria">',
)
html = html.replace(
    '<span>Bergneustadt, Germany</span>',
    '<span data-i18n="heroLoc">Bergneustadt, Germany</span>',
    1,
)
html = html.replace(
    '<div class="contact-business" aria-label="Business details">',
    '<div class="contact-business" aria-label="Business details" data-i18n-aria="bizAria">',
)
html = html.replace(
    '<p class="contact-business-label">Contracts &amp; invoices</p>',
    '<p class="contact-business-label" data-i18n="contact.bizLabel">Contracts &amp; invoices</p>',
)
html = html.replace(
    '<p class="contact-business-name"><strong>HB IT Services</strong> · Bergneustadt, Germany</p>',
    '<p class="contact-business-name" data-i18n="contact.bizName" data-i18n-html="true"><strong>HB IT Services</strong> · Bergneustadt, Germany</p>',
)
html = html.replace(
    '<p class="contact-business-note">EU remote · quotes &amp; invoices in EUR',
    '<p class="contact-business-note" data-i18n="contact.bizNote">EU remote · quotes &amp; invoices in EUR',
)
html = html.replace(
    '<div class="exp-summary" aria-label="Career highlights">',
    '<div class="exp-summary" aria-label="Career highlights" data-i18n-aria="expAria">',
)
for old, key in [
    ('<div class="exp-stat"><strong>UAE</strong><span>public-sector lead</span></div>', "exp.s1"),
    ('<div class="exp-stat"><strong>Enterprise</strong><span>Schneider &amp; B2B</span></div>', "exp.s2"),
    ('<div class="exp-stat"><strong>AI + LLM</strong><span>in production apps</span></div>', "exp.s3"),
    ('<div class="exp-stat"><strong>Remote</strong><span>EU &amp; MENA</span></div>', "exp.s4"),
]:
    html = html.replace(old, old.replace("<span>", f'<span data-i18n="{key}">'), 1)

# Credentials
for old, new in [
    ('<h3 class="credentials-title">Education &amp; credentials</h3>', '<h3 class="credentials-title" data-i18n="exp.credTitle">Education &amp; credentials</h3>'),
    ("<h4>Education</h4>", '<h4 data-i18n="exp.credEdu">Education</h4>'),
    ('<p class="credential-main">Licence, Computer Technology</p>', '<p class="credential-main" data-i18n="exp.eduMain">Licence, Computer Technology</p>'),
    ('<p class="credential-sub">ISET Sousse · 2013</p>', '<p class="credential-sub" data-i18n="exp.eduSub1">ISET Sousse · 2013</p>'),
    ('<p class="credential-sub">Erriadh High School — Computer Science · 2009</p>', '<p class="credential-sub" data-i18n="exp.eduSub2">Erriadh High School — Computer Science · 2009</p>'),
    ("<h4>Continuous learning</h4>", '<h4 data-i18n="exp.credLearn">Continuous learning</h4>'),
    ("<h4>Languages</h4>", '<h4 data-i18n="exp.credLang">Languages</h4>'),
]:
    html = html.replace(old, new, 1)

for text, key in [
    ("Generative AI for Software Development", "exp.course1"),
    ("Gemini CLI — Code &amp; Create with an Open-Source Agent", "exp.course2"),
    ("Pair Programming with a Large Language Model", "exp.course3"),
    ("Jetpack Compose — Udemy", "exp.course4"),
    ("Advanced Flutter UI — Coursera", "exp.course5"),
    ("AWS Amplify &amp; Firebase", "exp.course6"),
]:
    html = html.replace(f"<li>{text}</li>", f'<li data-i18n="{key}">{text}</li>', 1)

html = html.replace(
    '<li><span>English</span><em>Professional</em></li>',
    '<li><span data-i18n="exp.langEn">English</span><em data-i18n="exp.langEnLv">Professional</em></li>',
)
html = html.replace(
    '<li><span>French</span><em>Professional</em></li>',
    '<li><span data-i18n="exp.langFr">French</span><em data-i18n="exp.langFrLv">Professional</em></li>',
)
html = html.replace(
    '<li><span>Arabic</span><em>Native</em></li>',
    '<li><span data-i18n="exp.langAr">Arabic</span><em data-i18n="exp.langArLv">Native</em></li>',
)
html = html.replace(
    '<li><span>German</span><em>A2+ · improving</em></li>',
    '<li><span data-i18n="exp.langDe">German</span><em data-i18n="exp.langDeLv">A2+ · improving</em></li>',
)

# Projects by id
for art_id, pid in [
    ("myschneider", "myschneider"),
    ("maskan", "maskan"),
    ("dubai-culture", "culture"),
    ("dubai-police", "police"),
    ("digitsole", "digitsole"),
    ("runnrz", "runnrz"),
    ("knowlepsy", "knowlepsy"),
    ("gesundheitspersonal", "gesundheit"),
    ("cote-puces", "cotepuces"),
]:
    html = replace_article(html, art_id, pid)

html = html.replace(
    '<span class="work-domain">Government · UAE</span>\n              <h3>Dubai Chambers</h3>',
    '<span class="work-domain" data-i18n-project="chamber" data-i18n-field="domain">Government · UAE</span>\n              <h3>Dubai Chambers</h3>',
    1,
)

m = re.search(r"(<article class=\"work-card work-card-ai\">.*?</article>)", html, re.DOTALL)
if m:
    html = html[: m.start()] + wire_project_block(m.group(1), "aigov", has_role=False) + html[m.end() :]

# BTU card (no id)
m = re.search(
    r'(<article class="work-card">\s*<div class="work-head">\s*<span class="work-domain">Fintech · Web3</span>.*?</article>)',
    html,
    re.DOTALL,
)
if m:
    html = html[: m.start()] + wire_project_block(m.group(1), "btu") + html[m.end() :]

# Mobility card
m = re.search(
    r'(<article class="work-card">\s*<div class="work-head">\s*<span class="work-domain">Mobility · Social</span>.*?</article>)',
    html,
    re.DOTALL,
)
if m:
    html = html[: m.start()] + wire_project_block(m.group(1), "mobility") + html[m.end() :]

# Extended portfolio
m = re.search(r"(<article class=\"work-card work-card-more\">.*?</article>)", html, re.DOTALL)
if m:
    block = m.group(1)
    block = block.replace(
        '<span class="work-domain">30+ shipped</span>',
        '<span class="work-domain" data-i18n-project="extended" data-i18n-field="domain">30+ shipped</span>',
    )
    block = block.replace(
        '<p class="work-value">Additional WIMOBI-era',
        '<p class="work-value" data-i18n-project="extended" data-i18n-field="value">Additional WIMOBI-era',
    )
    block = block.replace(
        '<strong class="work-detail-label">Examples</strong><span class="work-detail-body">Coffreo',
        '<strong class="work-detail-label" data-i18n="label.examples">Examples</strong>'
        '<span class="work-detail-body" data-i18n-project="extended" data-i18n-field="examples">Coffreo',
    )
    block = block.replace(
        'rel="noopener">Coffreo on Play Store →</a>',
        'rel="noopener" data-i18n="work.coffreo">Coffreo on Play Store →</a>',
    )
    html = html[: m.start()] + block + html[m.end() :]

# Play store links
html = html.replace(
    'rel="noopener">Play Store →</a>',
    'rel="noopener" data-i18n="work.playLink">Play Store →</a>',
)
html = html.replace(
    'rel="noopener" data-i18n="work.playLink">Play Store →</a>\n            <a href="https://play.google.com/store/apps/details?id=com.schneider',
    'rel="noopener" data-i18n="work.playLink">Play Store →</a>\n            <a href="https://play.google.com/store/apps/details?id=com.schneider',
)
# Fix double data-i18n on first play link - myschneider already has it
html = html.replace('data-i18n="work.playLink" data-i18n="work.playLink"', 'data-i18n="work.playLink"')

html = html.replace(
    '<a href="https://play.google.com/store/apps/details?id=com.app.dubaichamber" target="_blank" rel="noopener">Play Store</a>',
    '<a href="https://play.google.com/store/apps/details?id=com.app.dubaichamber" target="_blank" rel="noopener" data-i18n="work.playStore">Play Store</a>',
)
html = html.replace(
    '<a href="https://appgallery.huawei.com/#/app/C116963383" target="_blank" rel="noopener">App Gallery</a>',
    '<a href="https://appgallery.huawei.com/#/app/C116963383" target="_blank" rel="noopener" data-i18n="work.appGallery">App Gallery</a>',
)

path.write_text(html, encoding="utf-8")
print("Wrote", path)
print("data-i18n-project count:", html.count("data-i18n-project"))
