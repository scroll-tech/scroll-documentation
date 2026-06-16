---
section: learn
date: Last Modified
title: "Vấn đề về khả năng mở rộng"
lang: "vn"
permalink: "học/tổng-quan-về-rollups"
excerpt: "Sự phân tán và bảo mật mạnh mẽ của Ethereum đến với một cái giá phải trả là sự hi sinh về khả năng mở rộng: để đảm bảo rằng tất cả các nút tham gia có thể theo kịp mạng lưới, năng suất của mạng bị giới hạn. Giới hạn này cuối cùng dẫn đến chi phí và độ trễ cao cho người dùng."
whatsnext: { "Tổng quan về Rollups": "/học/tổng-quan-về-rollups" }
---

## Vấn đề về khả năng mở rộng của Ethereum

[Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-is-ethereum) là một blockchain đa mục đích hỗ trợ triển khai và thực thi [smart contracts](https://ethereum.org/en/developers/docs/intro-to-ethereum/#what-are-smart-contracts).

Một trong những đặc điểm xác định của Ethereum là cam kết không lay chuyển đối với bảo mật và sự phân tán. Ethereum được thiết kế sao cho các máy tính trên khắp thế giới (kể cả những máy tính giá rẻ, như một [Raspberry Pi](https://ethereum-on-arm-documentation.readthedocs.io/)) có thể tham gia vào mạng lưới, chạy bản sao cục bộ của blockchain và xử lý các giao dịch mới.

Tuy nhiên, sự phân tán và bảo mật mạnh mẽ của Ethereum đến với một cái giá phải trả là sự hi sinh về khả năng mở rộng: để đảm bảo rằng tất cả các nút tham gia có thể theo kịp mạng lưới, năng suất của mạng bị giới hạn. Giới hạn này cuối cùng dẫn đến chi phí và độ trễ cao cho người dùng.

## Các giải pháp về khả năng mở rộng

Các giải pháp về khả năng mở rộng của Ethereum nhằm mục đích tăng năng suất của mạng mà không hi sinh sự phân tán hoặc bảo mật.

Có chủ yếu hai loại giải pháp về khả năng mở rộng: các giải pháp ở tầng 1 và các giải pháp ở tầng 2.

**Tầng 1** (hoặc **L1**) là các giải pháp về khả năng mở rộng cố gắng mở rộng mạng bằng cách thay đổi trực tiếp blockchain Ethereum. Thuật ngữ “tầng 1” ở đây đề cập đến blockchain Ethereum chính. Nói chung, việc thiết kế các giải pháp mở rộng ở tầng 1 để tăng năng suất và đồng thời bảo tồn mức độ bảo mật và sự phân tán cao rất khó khăn. Do đó, những nỗ lực về mở rộng gần đây đã chuyển hướng từ các giải pháp ở tầng 1 sang các giải pháp ở tầng 2.

**Tầng 2** (hoặc **L2**) là các giải pháp về khả năng mở rộng là các mạng sống **trên đỉnh** của Ethereum tầng 1 - chúng thực sự là các blockchain riêng biệt được “gắn kết” vào blockchain Ethereum cơ sở một cách nào đó. Các mạng ở tầng 2 này nói chung có thể xử lý các giao dịch với tốc độ cao hơn so với mạng tầng 1 cơ bản, vì chúng không chịu các hạn chế như vậy. Cơ chế “gắn kết”, chi tiết của đó khác nhau trên các tầng 2 khác nhau, cho phép mạng ở tầng 2 thừa kế các thuộc tính bảo mật và sự phân tán mạnh mẽ của Ethereum tầng 1.
