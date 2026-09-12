import drawsvg as draw


CAPTCHA_CODE = "B2k1"


def create_captcha(filename: str = "captcha_drawsvg.svg") -> None:
    drawing = draw.Drawing(200, 50, origin="center")
    drawing.append(draw.Rectangle(-100, -25, 200, 50, fill="white"))
    drawing.append(draw.Text(CAPTCHA_CODE, 20, 0, 0, fill="black", text_anchor="middle", dominant_baseline="middle"))
    drawing.save_svg(filename)


if __name__ == "__main__":
    create_captcha()
