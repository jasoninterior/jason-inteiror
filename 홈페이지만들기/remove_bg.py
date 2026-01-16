from PIL import Image
import sys

def remove_background(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # item is (R, G, B, A)
            # Check if the pixel is light (white or grey checkerboard pattern)
            # We keep dark pixels (the logo lines)
            # Threshold: if R, G, and B are all high (> 150), it's likely background
            if item[0] > 150 and item[1] > 150 and item[2] > 150:
                newData.append((255, 255, 255, 0))  # Make it transparent
            else:
                newData.append(item)  # Keep the pixel

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} and saved to {output_path}")

    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    remove_background("images/logo.png", "images/logo_transparent.png")
