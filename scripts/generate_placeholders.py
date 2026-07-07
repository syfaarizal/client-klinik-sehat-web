from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = "/home/claude/rasakita/public/images"
os.makedirs(OUT_DIR, exist_ok=True)

PALETTE = ["#F7931A", "#FFB454", "#2B2B2B", "#7A0F16", "#D97706", "#4A4A4A"]

images = {
    "hero-1.jpg": (1280, 720),
    "hero-2.jpg": (640, 640),
    "hero-3.jpg": (640, 640),
    "about-hero.jpg": (960, 720),
    "banner-promo.jpg": (1600, 700),
    "category-camilan.jpg": (800, 600),
    "category-frozen.jpg": (800, 600),
    "category-katering.jpg": (800, 600),
    "category-minuman.jpg": (800, 600),
    "product-dimsum.jpg": (800, 800),
    "product-dimsum-2.jpg": (800, 800),
    "product-bakso.jpg": (800, 800),
    "product-cireng.jpg": (800, 800),
    "product-katering.jpg": (800, 800),
    "product-thaitea.jpg": (800, 800),
    "product-keripik.jpg": (800, 800),
    "product-mochi.jpg": (800, 800),
    "product-nugget.jpg": (800, 800),
    "product-eskopi.jpg": (800, 800),
    "product-salad.jpg": (800, 800),
    "product-risoles.jpg": (800, 800),
    "product-matcha.jpg": (800, 800),
    "testimonial-1.jpg": (200, 200),
    "testimonial-2.jpg": (200, 200),
    "testimonial-3.jpg": (200, 200),
    "testimonial-4.jpg": (200, 200),
}

try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)
    small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
except Exception:
    font = ImageFont.load_default()
    small_font = ImageFont.load_default()

for i, (filename, size) in enumerate(images.items()):
    color = PALETTE[i % len(PALETTE)]
    img = Image.new("RGB", size, color)
    draw = ImageDraw.Draw(img)

    label = filename.replace(".jpg", "").replace("-", " ").title()
    w, h = size
    text_w = draw.textlength(label, font=font)
    draw.text(((w - text_w) / 2, h / 2 - 20), label, fill="white", font=font)

    sub = f"{w}x{h} placeholder"
    sub_w = draw.textlength(sub, font=small_font)
    draw.text(((w - sub_w) / 2, h / 2 + 16), sub, fill="white", font=small_font)

    img.save(os.path.join(OUT_DIR, filename), quality=82)

print("done", len(images))
