import svgwrite


CAPTCHA_CODE = "Q2R7K"


def create_captcha(filename: str = "captcha.svg") -> None:
    drawing = svgwrite.Drawing(filename, profile="tiny", size=(200, 50))
    drawing.add(drawing.rect(insert=(0, 0), size=("100%", "100%"), fill="white"))
    drawing.add(drawing.text(CAPTCHA_CODE, insert=(50, 35), fill="black", font_size="24"))
    drawing.save()


if __name__ == "__main__":
    create_captcha()
