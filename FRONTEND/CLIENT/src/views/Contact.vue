<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-center mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h2>
        <form>
          <div class="mb-3">
            <label for="fullName" class="form-label">Họ và Tên Độc Giả</label>
            <input type="text" class="form-control" id="fullName" name="fullName" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Nội Dung Phản Hồi</label>
            <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">GỬI PHẢN HỒI</button>
        </form>
        <div class="mt-5">
          <h4>CHÚ Ý: MỌI THẮC MẮC XIN HÃY LIÊN HỆ VỚI CHÚNG TÔI</h4>
          <p><i class="fas fa-map-marker-alt"></i> Địa chỉ: Hẻm 547, Hưng Lợi, Ninh Kiều, Cần Thơ</p>
          <p><i class="fas fa-phone"></i> Điện thoại: +84 988 420 245</p>
          <p><i class="fas fa-envelope"></i> Email: khoab2005678@student.ctu.edu.vn</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

  form {
    max-width: 500px;
    margin: auto;
  }


  .mt-5 p {
    margin-bottom: 5px;
  }

  .mt-5 ul {
    list-style-type: none;
    padding: 0;
  }

  .mt-5 li {
    margin-bottom: 10px;
  }
</style>
