# Sheets Order Inventory Automation

구글 스프레드시트를 데이터 저장소로 사용하는 수주/발주/재고 자동화 데모입니다. 실제 프로젝트에서는 Google Sheets API 인증을 연결해 지정 시트에 데이터를 반영합니다.

## Portfolio Summary

엑셀로 관리하던 수주, 발주, 재고 데이터를 웹 입력 폼과 구글 스프레드시트 자동화 구조로 전환하는 업무 자동화 예시입니다.

- 업무 범위: 업무 흐름 분석, 입력 폼 개발, 스프레드시트 자동화
- 적용 분야: 재고 관리, 업무자동화/RPA, 엑셀 대체
- 포트폴리오 상세: [PORTFOLIO.md](./PORTFOLIO.md)

## 주요 기능

- 수주 입력
- 수입 발주 입력
- 판매 완료 시 재고 차감
- 적정 재고 미만 품목 식별

## 기술 스택

- JavaScript
- Google Sheets API 확장 가능
- Excel/Sheets 기반 업무 자동화 설계

## 실행 방법

```bash
python3 -m http.server 5175
```
