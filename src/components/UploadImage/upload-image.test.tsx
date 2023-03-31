import { fireEvent, render, screen, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import UploadImage from ".";

describe("UploadImage", () => {
  test("Checking if image upload component is uploading image", async () => {
    // SET
    render(<UploadImage/>);
    const boxUploadImage = screen.getByTestId("box-upload-image");
    const inputFile = screen.getByTestId("input-file");

    // ACT
    fireEvent.click(boxUploadImage);
    fireEvent.change(inputFile, {
      target: {
        files: new File([new ArrayBuffer(10)], 'image-test.png', { type: 'image/png' })
      },
    })

    // ASSERT
    console.log(inputFile);
  })
});