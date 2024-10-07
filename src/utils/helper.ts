import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const getErrorMessage = (error: any) => {
  let errorMessage;

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data); //Nếu error có chứa thuộc tính error, thì trả về error.error.
      //Nếu không, trả về chuỗi JSON của error.data (giúp hiển thị các thông tin chi tiết khác nếu có).

      errorMessage = errMsg;
    } else {
      errorMessage = error.message;
    }
  } else {
    errorMessage = "Unable to fetch the data. Please try again later.";
  }

  return errorMessage;
};

export const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "";
};

export function cn(...inputs: ClassValue[]) {
  //Hàm cn này giúp bạn dễ dàng kết hợp nhiều class CSS lại với nhau,
  // loại bỏ các class không hợp lệ hoặc xung đột, đặc biệt hữu ích khi bạn sử dụng Tailwind CSS. Bằng cách sử dụng clsx và twMerge,
  // bạn có thể kết hợp class một cách linh hoạt và hiệu quả, đặc biệt là khi có những class thay đổi dựa trên điều kiện.
  return twMerge(clsx(inputs));
}
