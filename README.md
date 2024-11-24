Dựa trên cơ sở dữ liệu bạn đã cung cấp, sau đây là toàn bộ các ràng buộc toàn vẹn cho database của bạn, bao gồm ràng buộc về miền giá trị, liên thuộc tính, liên bộ và các ràng buộc có bối cảnh nhiều quan hệ.

---

### **I. Ràng buộc toàn vẹn với bối cảnh là một quan hệ**

#### **1. Ràng buộc toàn vẹn về miền giá trị:**

**Bảng ThuThu:**

1. **Ràng buộc:** Giới tính của thủ thư phải là Nam, Nữ hoặc Khác.

   - **Nội dung:** ∀i ∈ ThuThu (i.PHAI ∈ {‘NAM’, ‘NỮ’, ‘KHÁC’})
   - **Tầm ảnh hưởng:**

     | Quan hệ | Thêm | Xóa | Sửa |
     | ------- | ---- | --- | --- |
     | ThuThu  | +    | -   | +   |

**Bảng DocGia:**

2. **Ràng buộc:** Giới tính của độc giả phải là Nam, Nữ hoặc Khác.

   - **Nội dung:** ∀i ∈ DocGia (i.PHAI ∈ {‘NAM’, ‘NỮ’, ‘KHÁC’})
   - **Tầm ảnh hưởng:**

     | Quan hệ | Thêm | Xóa | Sửa |
     | ------- | ---- | --- | --- |
     | DocGia  | +    | -   | +   |

3. **Ràng buộc:** Số điện thoại của độc giả không được vượt quá 15 ký tự.

   - **Nội dung:** ∀i ∈ DocGia (LEN(i.SODIENTHOAI) ≤ 15)
   - **Tầm ảnh hưởng:**

     | Quan hệ | Thêm | Xóa | Sửa |
     | ------- | ---- | --- | --- |
     | DocGia  | +    | -   | +   |

**Bảng TacGia:**

4. **Ràng buộc:** Giới tính của tác giả phải là Nam, Nữ hoặc Khác.

   - **Nội dung:** ∀i ∈ TacGia (i.PHAI ∈ {‘NAM’, ‘NỮ’, ‘KHÁC’})
   - **Tầm ảnh hưởng:**

     | Quan hệ | Thêm | Xóa | Sửa |
     | ------- | ---- | --- | --- |
     | TacGia  | +    | -   | +   |

**Bảng KeSach:**

5. **Ràng buộc:** Số thứ tự kệ phải lớn hơn 0.

   - **Nội dung:** ∀i ∈ KeSach (i.SOTHUTUKE > 0)
   - **Tầm ảnh hưởng:**

     | Quan hệ | Thêm | Xóa | Sửa |
     | ------- | ---- | --- | --- |
     | KeSach  | +    | -   | +   |

**Bảng NganSach:**

6. **Ràng buộc:** Loại kho của ngăn sách chỉ có thể là Lớn, Vừa hoặc Nhỏ.

   - **Nội dung:** ∀i ∈ NganSach (i.LOAIKHO ∈ {‘LỚN’, ‘VỪA’, ‘NHỎ’})
   - **Tầm ảnh hưởng:**

     | Quan hệ  | Thêm | Xóa | Sửa |
     | -------- | ---- | --- | --- |
     | NganSach | +    | -   | +   |

7. **Ràng buộc:** Số thứ tự ngăn phải lớn hơn 0.

   - **Nội dung:** ∀i ∈ NganSach (i.SOTHUTUNGAN > 0)
   - **Tầm ảnh hưởng:**

     | Quan hệ  | Thêm | Xóa | Sửa |
     | -------- | ---- | --- | --- |
     | NganSach | +    | -   | +   |

**Bảng CuonSach:**

8. **Ràng buộc:** Kho sách chỉ nhận các giá trị: Lớn, Vừa, Nhỏ.

   - **Nội dung:** ∀i ∈ CuonSach (i.KHOSACH ∈ {‘LỚN’, ‘VỪA’, ‘NHỎ’})
   - **Tầm ảnh hưởng:**

     | Quan hệ  | Thêm | Xóa | Sửa |
     | -------- | ---- | --- | --- |
     | CuonSach | +    | -   | +   |

9. **Ràng buộc:** Chỗ mượn về có thể là Có hoặc Không.

   - **Nội dung:** ∀i ∈ CuonSach (i.CHOMUONVE ∈ {‘CÓ’, ‘KHÔNG’})
   - **Tầm ảnh hưởng:**

     | Quan hệ  | Thêm | Xóa | Sửa |
     | -------- | ---- | --- | --- |
     | CuonSach | +    | -   | +   |

10. **Ràng buộc:** Tình trạng sách là Đang được mượn hoặc Còn.

    - **Nội dung:** ∀i ∈ CuonSach (i.TINHTRANG ∈ {‘ĐANG ĐƯỢC MƯỢN’, ‘CÒN’})
    - **Tầm ảnh hưởng:**

      | Quan hệ  | Thêm | Xóa | Sửa |
      | -------- | ---- | --- | --- |
      | CuonSach | +    | -   | +   |

**Bảng DauSach:**

11. **Ràng buộc:** Số trang của đầu sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ DauSach (i.SOTRANG > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | DauSach | +    | -   | +   |

12. **Ràng buộc:** Đơn giá của đầu sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ DauSach (i.DONGIA > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | DauSach | +    | -   | +   |

13. **Ràng buộc:** Năm xuất bản của đầu sách phải nhỏ hơn hoặc bằng năm hiện tại.

    - **Nội dung:** ∀i ∈ DauSach (i.NAMXUATBAN ≤ YEAR(GETDATE()))
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | DauSach | +    | -   | +   |

14. **Ràng buộc:** Số lượng cuốn sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ DauSach (i.SOLUONGCUONSACH > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | DauSach | +    | -   | +   |

**Bảng PhieuMuonSach:**

15. **Ràng buộc:** Số sách mượn không được nhỏ hơn 1 và không được lớn hơn 3.

    - **Nội dung:** ∀i ∈ PhieuMuonSach (1 ≤ i.SOSACHMUON ≤ 3)
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuMuonSach | +    | -   | +   |

**Bảng ChiTietPhieuNhapSach:**

16. **Ràng buộc:** Đơn giá trong chi tiết phiếu nhập sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ ChiTietPhieuNhapSach (i.DONGIA > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ              | Thêm | Xóa | Sửa |
      | -------------------- | ---- | --- | --- |
      | ChiTietPhieuNhapSach | +    | -   | +   |

17. **Ràng buộc:** Số lượng trong chi tiết phiếu nhập sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ ChiTietPhieuNhapSach (i.SOLUONG > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ              | Thêm | Xóa | Sửa |
      | -------------------- | ---- | --- | --- |
      | ChiTietPhieuNhapSach | +    | -   | +   |

**Bảng PhiThanhVien:**

18. **Ràng buộc:** Năm trong phí thành viên phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ PhiThanhVien (i.NAM > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ      | Thêm | Xóa | Sửa |
      | ------------ | ---- | --- | --- |
      | PhiThanhVien | +    | -   | +   |

19. **Ràng buộc:** Tiền phí trong phí thành viên phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ PhiThanhVien (i.TIENPHI > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ      | Thêm | Xóa | Sửa |
      | ------------ | ---- | --- | --- |
      | PhiThanhVien | +    | -   | +   |

**Bảng PhiPhat:**

20. **Ràng buộc:** Tiền phạt phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ PhiPhat (i.TIENPHAT > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | PhiPhat | +    | -   | +   |

#### **2. Ràng buộc toàn vẹn liên thuộc tính:**

**Bảng ThuThu:**

21. **Ràng buộc:** Ngày sinh của thủ thư phải nhỏ hơn ngày hiện tại.

    - **Nội dung:** ∀i ∈ ThuThu (i.NGAYSINH < GETDATE())
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | ThuThu  | +    | -   | +   |

**Bảng DocGia:**

22. **Ràng buộc:** Ngày sinh của độc giả phải nhỏ hơn ngày hiện tại.

    - **Nội dung:** ∀i ∈ DocGia (i.NGAYSINH < GETDATE())
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | DocGia  | +    | -   | +   |

**Bảng TacGia:**

23. **Ràng buộc:** Ngày sinh của tác giả phải nhỏ hơn ngày hiện tại.

    - **Nội dung:** ∀i ∈ TacGia (i.NGAYSINH < GETDATE())
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | TacGia  | +    | -   | +   |

**Bảng PhieuMuonSach:**

24. **Ràng buộc:** Ngày mượn phải nhỏ hơn ngày dự kiến trả.

    - **Nội dung:** ∀i ∈ PhieuMuonSach (i.NGAYMUON < i.NGAYDUKIENTRA)
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuMuonSach | +    | -   | +   |

**Bảng ChiTietPhieuMuon:**

25. **Ràng buộc:** Nếu ngày trả thực tế không null, thì ngày trả thực tế phải lớn hơn hoặc bằng ngày mượn.

    - **Nội dung:** ∀i ∈ ChiTietPhieuMuon (i.NGAYTRATHUCTE IS NULL OR i.NGAYTRATHUCTE ≥ (SELECT NGAYMUON FROM PhieuMuonSach WHERE MAPHIEUMUON = i.MAPHIEUMUON))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | ChiTietPhieuMuon | +    | -   | +   |

26. **Ràng buộc:** Nếu ngày gia hạn không null, thì ngày gia hạn phải lớn hơn ngày dự kiến trả.

    - **Nội dung:** ∀i ∈ ChiTietPhieuMuon (i.NGAYGIAHAN IS NULL OR i.NGAYGIAHAN > (SELECT NGAYDUKIENTRA FROM PhieuMuonSach WHERE MAPHIEUMUON = i.MAPHIEUMUON))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | ChiTietPhieuMuon | +    | -   | +   |

**Bảng PhieuNhapSach:**

27. **Ràng buộc:** Tổng số lượng trong phiếu nhập sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ PhieuNhapSach (i.TONGSOLUONG > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuNhapSach | +    | -   | +   |

28. **Ràng buộc:** Tổng giá trong phiếu nhập sách phải lớn hơn 0.

    - **Nội dung:** ∀i ∈ PhieuNhapSach (i.TONGGIA > 0)
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuNhapSach | +    | -   | +   |

**Bảng DongPhiPhat:**

29. **Ràng buộc:** Nếu ngày đóng phạt không null, thì ngày đóng phạt phải lớn hơn hoặc bằng ngày phạt.

    - **Nội dung:** ∀i ∈ DongPhiPhat (i.NGAYDONGPHAT IS NULL OR i.NGAYDONGPHAT ≥ i.NGAYPHAT)
    - **Tầm ảnh hưởng:**

      | Quan hệ     | Thêm | Xóa | Sửa |
      | ----------- | ---- | --- | --- |
      | DongPhiPhat | +    | -   | +   |

#### **3. Ràng buộc toàn vẹn liên bộ:**

**Bảng PhieuMuonSach với ThuThu và DocGia:**

30. **Ràng buộc:** Mã thủ thư mượn trong phiếu mượn sách phải tồn tại trong bảng ThuThu.

    - **Nội dung:** ∀i ∈ PhieuMuonSach (∃ t ∈ ThuThu (t.MATHUTHU = i.MATHUTHUMUON))
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuMuonSach | +    | -   | +   |
      | ThuThu        | -    | +   | +   |

31. **Ràng buộc:** Mã độc giả trong phiếu mượn sách phải tồn tại trong bảng DocGia.

    - **Nội dung:** ∀i ∈ PhieuMuonSach (∃ d ∈ DocGia (d.MADOCGIA = i.MADOCGIA))
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuMuonSach | +    | -   | +   |
      | DocGia        | -    | +   | +   |

**Bảng CuonSach với DauSach và NganSach:**

32. **Ràng buộc:** Mã đầu sách trong cuốn sách phải tồn tại trong bảng DauSach.

    - **Nội dung:** ∀i ∈ CuonSach (∃ d ∈ DauSach (d.MADAUSACH = i.MADAUSACH))
    - **Tầm ảnh hưởng:**

      | Quan hệ  | Thêm | Xóa | Sửa |
      | -------- | ---- | --- | --- |
      | CuonSach | +    | -   | +   |
      | DauSach  | -    | +   | +   |

33. **Ràng buộc:** Mã ngăn sách trong cuốn sách phải tồn tại trong bảng NganSach.

    - **Nội dung:** ∀i ∈ CuonSach (∃ n ∈ NganSach (n.MANGAN = i.MANGAN))
    - **Tầm ảnh hưởng:**

      | Quan hệ  | Thêm | Xóa | Sửa |
      | -------- | ---- | --- | --- |
      | CuonSach | +    | -   | +   |
      | NganSach | -    | +   | +   |

**Bảng NganSach với KeSach:**

34. **Ràng buộc:** Mã kệ trong ngăn sách phải tồn tại trong bảng KeSach.

    - **Nội dung:** ∀i ∈ NganSach (∃ k ∈ KeSach (k.MAKE = i.MAKE))
    - **Tầm ảnh hưởng:**

      | Quan hệ  | Thêm | Xóa | Sửa |
      | -------- | ---- | --- | --- |
      | NganSach | +    | -   | +   |
      | KeSach   | -    | +   | +   |

**Bảng DauSach với TheLoaiSach và NhaXuatBan:**

35. **Ràng buộc:** Mã thể loại trong đầu sách phải tồn tại trong bảng TheLoaiSach.

    - **Nội dung:** ∀i ∈ DauSach (∃ t ∈ TheLoaiSach (t.MATHELOAI = i.MATHELOAI))
    - **Tầm ảnh hưởng:**

      | Quan hệ     | Thêm | Xóa | Sửa |
      | ----------- | ---- | --- | --- |
      | DauSach     | +    | -   | +   |
      | TheLoaiSach | -    | +   | +   |

36. **Ràng buộc:** Mã nhà xuất bản trong đầu sách phải tồn tại trong bảng NhaXuatBan.

    - **Nội dung:** ∀i ∈ DauSach (∃ n ∈ NhaXuatBan (n.MANXB = i.MANXB))
    - **Tầm ảnh hưởng:**

      | Quan hệ    | Thêm | Xóa | Sửa |
      | ---------- | ---- | --- | --- |
      | DauSach    | +    | -   | +   |
      | NhaXuatBan | -    | +   | +   |

**Bảng SangTac với TacGia và DauSach:**

37. **Ràng buộc:** Mã tác giả trong Sáng Tác phải tồn tại trong bảng TacGia.

    - **Nội dung:** ∀i ∈ SangTac (∃ t ∈ TacGia (t.MATACGIA = i.MATACGIA))
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | SangTac | +    | -   | +   |
      | TacGia  | -    | +   | +   |

38. **Ràng buộc:** Mã đầu sách trong Sáng Tác phải tồn tại trong bảng DauSach.

    - **Nội dung:** ∀i ∈ SangTac (∃ d ∈ DauSach (d.MADAUSACH = i.MADAUSACH))
    - **Tầm ảnh hưởng:**

      | Quan hệ | Thêm | Xóa | Sửa |
      | ------- | ---- | --- | --- |
      | SangTac | +    | -   | +   |
      | DauSach | -    | +   | +   |

**Bảng ChiTietPhieuMuon với PhieuMuonSach và CuonSach:**

39. **Ràng buộc:** Mã phiếu mượn trong Chi Tiết Phiếu Mượn phải tồn tại trong bảng PhieuMuonSach.

    - **Nội dung:** ∀i ∈ ChiTietPhieuMuon (∃ p ∈ PhieuMuonSach (p.MAPHIEUMUON = i.MAPHIEUMUON))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | ChiTietPhieuMuon | +    | -   | +   |
      | PhieuMuonSach    | -    | +   | +   |

40. **Ràng buộc:** Mã cuốn sách trong Chi Tiết Phiếu Mượn phải tồn tại trong bảng CuonSach.

    - **Nội dung:** ∀i ∈ ChiTietPhieuMuon (∃ c ∈ CuonSach (c.MACUONSACH = i.MACUONSACH))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | ChiTietPhieuMuon | +    | -   | +   |
      | CuonSach         | -    | +   | +   |

**Bảng PhieuNhapSach với ThuThu:**

41. **Ràng buộc:** Mã thủ thư trong Phiếu Nhập Sách phải tồn tại trong bảng ThuThu.

    - **Nội dung:** ∀i ∈ PhieuNhapSach (∃ t ∈ ThuThu (t.MATHUTHU = i.MATHUTHU))
    - **Tầm ảnh hưởng:**

      | Quan hệ       | Thêm | Xóa | Sửa |
      | ------------- | ---- | --- | --- |
      | PhieuNhapSach | +    | -   | +   |
      | ThuThu        | -    | +   | +   |

**Bảng ChiTietPhieuNhapSach với PhieuNhapSach và DauSach:**

42. **Ràng buộc:** Mã phiếu nhập trong Chi Tiết Phiếu Nhập Sách phải tồn tại trong bảng PhieuNhapSach.

    - **Nội dung:** ∀i ∈ ChiTietPhieuNhapSach (∃ p ∈ PhieuNhapSach (p.MAPHIEUNHAP = i.MAPHIEUNHAP))
    - **Tầm ảnh hưởng:**

      | Quan hệ              | Thêm | Xóa | Sửa |
      | -------------------- | ---- | --- | --- |
      | ChiTietPhieuNhapSach | +    | -   | +   |
      | PhieuNhapSach        | -    | +   | +   |

43. **Ràng buộc:** Mã đầu sách trong Chi Tiết Phiếu Nhập Sách phải tồn tại trong bảng DauSach.

    - **Nội dung:** ∀i ∈ ChiTietPhieuNhapSach (∃ d ∈ DauSach (d.MADAUSACH = i.MADAUSACH))
    - **Tầm ảnh hưởng:**

      | Quan hệ              | Thêm | Xóa | Sửa |
      | -------------------- | ---- | --- | --- |
      | ChiTietPhieuNhapSach | +    | -   | +   |
      | DauSach              | -    | +   | +   |

**Bảng PhieuThanhLySach với ThuThu và CuonSach:**

44. **Ràng buộc:** Mã thủ thư trong Phiếu Thanh Lý Sách phải tồn tại trong bảng ThuThu.

    - **Nội dung:** ∀i ∈ PhieuThanhLySach (∃ t ∈ ThuThu (t.MATHUTHU = i.MATHUTHU))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | PhieuThanhLySach | +    | -   | +   |
      | ThuThu           | -    | +   | +   |

45. **Ràng buộc:** Mã cuốn sách trong Phiếu Thanh Lý Sách phải tồn tại trong bảng CuonSach.

    - **Nội dung:** ∀i ∈ PhieuThanhLySach (∃ c ∈ CuonSach (c.MACUONSACH = i.MACUONSACH))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | PhieuThanhLySach | +    | -   | +   |
      | CuonSach         | -    | +   | +   |

**Bảng DongPhiThanhVien với PhiThanhVien và DocGia:**

46. **Ràng buộc:** Mã phí trong Đóng Phí Thành Viên phải tồn tại trong bảng PhiThanhVien.

    - **Nội dung:** ∀i ∈ DongPhiThanhVien (∃ p ∈ PhiThanhVien (p.MAPHI = i.MAPHI))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | DongPhiThanhVien | +    | -   | +   |
      | PhiThanhVien     | -    | +   | +   |

47. **Ràng buộc:** Mã độc giả trong Đóng Phí Thành Viên phải tồn tại trong bảng DocGia.

    - **Nội dung:** ∀i ∈ DongPhiThanhVien (∃ d ∈ DocGia (d.MADOCGIA = i.MADOCGIA))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | DongPhiThanhVien | +    | -   | +   |
      | DocGia           | -    | +   | +   |

**Bảng DongPhiPhat với PhiPhat và DocGia:**

48. **Ràng buộc:** Mã phạt trong Đóng Phí Phạt phải tồn tại trong bảng PhiPhat.

    - **Nội dung:** ∀i ∈ DongPhiPhat (∃ p ∈ PhiPhat (p.MAPHAT = i.MAPHAT))
    - **Tầm ảnh hưởng:**

      | Quan hệ     | Thêm | Xóa | Sửa |
      | ----------- | ---- | --- | --- |
      | DongPhiPhat | +    | -   | +   |
      | PhiPhat     | -    | +   | +   |

49. **Ràng buộc:** Mã độc giả trong Đóng Phí Phạt phải tồn tại trong bảng DocGia.

    - **Nội dung:** ∀i ∈ DongPhiPhat (∃ d ∈ DocGia (d.MADOCGIA = i.MADOCGIA))
    - **Tầm ảnh hưởng:**

      | Quan hệ     | Thêm | Xóa | Sửa |
      | ----------- | ---- | --- | --- |
      | DongPhiPhat | +    | -   | +   |
      | DocGia      | -    | +   | +   |

---

### **II. Ràng buộc toàn vẹn với bối cảnh nhiều quan hệ**

#### **1. Ràng buộc toàn vẹn về phụ thuộc tồn tại:**

50. **Ràng buộc:** Loại kho của cuốn sách phải tương ứng với loại kho của ngăn sách chứa nó.

    - **Nội dung:** ∀i ∈ CuonSach, ∃ n ∈ NganSach (i.MANGAN = n.MANGAN ∧ i.KHOSACH = n.LOAIKHO)
    - **Tầm ảnh hưởng:**

      | Quan hệ  | Thêm | Xóa | Sửa |
      | -------- | ---- | --- | --- |
      | CuonSach | +    | -   | +   |
      | NganSach | +    | -   | +   |

#### **2. Ràng buộc toàn vẹn liên thuộc tính liên quan hệ:**

51. **Ràng buộc:** Một độc giả chỉ được đóng phí thành viên một lần cho mỗi năm.

    - **Nội dung:** ∀i, j ∈ DongPhiThanhVien, i.MADOCGIA = j.MADOCGIA ∧ i.MAPHI = j.MAPHI ⇒ i.NGAYDONG = j.NGAYDONG
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | DongPhiThanhVien | +    | -   | +   |

52. **Ràng buộc:** Một cuốn sách chỉ có thể được mượn khi tình trạng của nó là "Còn".

    - **Nội dung:** ∀i ∈ ChiTietPhieuMuon, ∃ c ∈ CuonSach (i.MACUONSACH = c.MACUONSACH ∧ c.TINHTRANG = 'CÒN')
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | ChiTietPhieuMuon | +    | -   | +   |
      | CuonSach         | +    | -   | +   |

53. **Ràng buộc:** Số lượng sách mượn trong phiếu mượn phải bằng số lượng chi tiết phiếu mượn tương ứng.

    - **Nội dung:** ∀i ∈ PhieuMuonSach (i.SOSACHMUON = COUNT(j ∈ ChiTietPhieuMuon | j.MAPHIEUMUON = i.MAPHIEUMUON))
    - **Tầm ảnh hưởng:**

      | Quan hệ          | Thêm | Xóa | Sửa |
      | ---------------- | ---- | --- | --- |
      | PhieuMuonSach    | +    | -   | +   |
      | ChiTietPhieuMuon | +    | -   | +   |

---

Trên đây là tất cả các ràng buộc toàn vẹn cho cơ sở dữ liệu của bạn, được diễn đạt theo cách chi tiết và phù hợp với yêu cầu.
