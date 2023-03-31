import { fireEvent, render, screen, act } from "@testing-library/react";
import UploadImage from ".";

describe("UploadImage", () => {
  test("Checking if image upload component is uploading image", async () => {
    // SET
    render(<UploadImage/>);
    const boxUploadImage = screen.getByTestId("box-upload-image");
    const inputFile = screen.getByTestId("input-file") as HTMLInputElement;
    const files = new File([new ArrayBuffer(10)], "test-image.png", {
      type: "image/png",
    });

    // ACT
    act(() => {
      fireEvent.click(boxUploadImage);
      fireEvent.change(inputFile, {
        target: {
          files: [files],
        },
      })
    })

    // ASSERT
    expect(inputFile.files?.length).toStrictEqual(1);

    if (inputFile.files?.length) {
      expect(inputFile.files[0]?.name).toStrictEqual("test-image.png");
      expect(inputFile.files[0]?.type).toStrictEqual("image/png");
    }
  });

  test("Checking if image upload component is uploading image per drag in drop", async () => {
    // SET
    const handleDrop = jest.fn();
    render(<UploadImage onDrop={handleDrop}/>);
    const boxUploadImage = screen.getByTestId("box-upload-image");
    const files = new File([new ArrayBuffer(10)], "test-image.png", {
      type: "image/png",
    });

    // ACT
    act(() => {
      fireEvent.drop(boxUploadImage, { 
        dataTransfer: {
          files: [files]
        }
      });
    })

    // ASSERT
    expect(handleDrop).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "drop",
        dataTransfer: expect.objectContaining({
          files: expect.arrayContaining([
            expect.objectContaining({
              name: "test-image.png",
              type: "image/png",
            }),
          ]),
        }),
      }),
    );
  });
});