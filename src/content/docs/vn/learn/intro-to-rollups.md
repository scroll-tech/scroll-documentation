---
section: learn
date: Last Modified
title: "Giới thiệu về Rollups"
lang: "vn"
permalink: "học/giới-thiệu-về-rollups"
excerpt: "Rollups là giải pháp mở rộng lớp 2 phổ biến nhất trong hệ sinh thái Ethereum."
whatsnext: { "Quy trình Rollup của Scroll": "/technology/chain/rollup" }
---

## Rollup là gì?

Rollups là giải pháp mở rộng lớp 2 phổ biến nhất trong hệ sinh thái Ethereum và được xem là [phần trung tâm](https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698) của lộ trình Ethereum.

Một rollup xử lý các lô giao dịch ngoại chuỗi (tức là không trên lớp 1), sau đó đăng dữ liệu kết quả lên chuỗi (tức là trên lớp 1).

Việc thực thi mỗi giao dịch được thực hiện ngoại chuỗi và không cần phải được thực hiện lại bởi các nút lớp 1. Điều này cho phép tăng năng suất giao dịch cao mà không ảnh hưởng đến sự phân tán của lớp 1.

Để một rollup được bảo mật, nó phải chứng minh rằng tính toán ngoại chuỗi của nó (việc xử lý giao dịch) đã được thực hiện đúng. Có chủ yếu hai cơ chế để chứng minh tính hợp lệ của tính toán ngoại chuỗi: chứng minh tính hợp lệ và chứng minh gian lận.

## Optimistic rollup là gì?

Một optimistic rollup là một rollup sử dụng chứng minh gian lận để khẳng định tính hợp lệ của tính toán của nó.

Chứng minh gian lận là một cơ chế cho phép người dùng thách thức và chứng minh tính không hợp lệ của bất kỳ tính toán nào được thực hiện trên L2. Nếu một chứng minh gian lận được gửi thành công, L2 có thể được quay trở lại trạng thái trước đó và tính toán không hợp lệ có thể được sửa chữa. Chứng minh gian lận phụ thuộc ít nhất vào một bên trung thực kiểm tra rằng các giao dịch L2 đã được thực hiện đúng.

## ZK rollup là gì?

Một ZK rollup là một rollup sử dụng chứng minh tính hợp lệ để khẳng định tính hợp lệ của tính toán của nó.

Khi một ZK rollup thực hiện một lô giao dịch và đăng tải trạng thái kết quả lên L1, nó cũng đăng tải một chứng minh tính hợp lệ. Chứng minh toán học này chứng minh rằng trạng thái kết quả thực sự là trạng thái kết quả từ việc thực thi đúng lô giao dịch.

Hiện nay, có nhiều loại ZK rollups, được định nghĩa rộng rãi là zkVMs (máy ảo zk) hoặc zkEVMs (máy ảo Ethereum zk).

zkVMs được thiết kế từ đầu để hoạt động tốt với mạch ZK và yêu cầu các quy trình phát triển khác so với một zkEVM. Một số ví dụ về điều này bao gồm Starkware và Aztec.

zkEVMs được thiết kế để mô phỏng EVM. Có hai loại chính của zkEVMs: tương thích bytecode và tương thích ngôn ngữ. zkEVMs tương thích bytecode mô phỏng EVM ở một cấp độ rất thấp, cho phép có một trải nghiệm phát triển và người dùng gần như giống với Ethereum Lớp 1. zkSync là zkEVM tương thích ngôn ngữ phổ biến nhất.

Scroll là tương thích bytecode. Phương pháp này được chọn vì nó mang lại một số lợi ích nhất định:

- Solidity, Vyper và Huff hoạt động ngay lập tức
- Không cần phải kiểm tra lại
- Hầu hết các công cụ hiện có được thừa hưởng
- Trải nghiệm người dùng gần như giống với Ethereum

Thông tin chi tiết về phương pháp của Scroll được tìm thấy trong phần Công nghệ.

## Đọc thêm

- [Một Hướng Dẫn Không Đầy Đủ về Rollups](https://vitalik.ca/general/2021/01/05/rollup.html) - Vitalik Buterin
- [Mở rộng](https://ethereum.org/en/developers/docs/scaling/) - Tài liệu Ethereum
