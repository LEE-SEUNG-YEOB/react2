# 202030121 이승엽

## 9월 3일 (2주차)
### IDE 플러그인  
* Next.js에는 사용자 정의 TypeScript 플러그인과 유형 검사기가 포함  

* VScode와 다른 코드 편집기에서 고급 유형 검사 및 자동 완성에 사용  
* VScode에서 플러그인을 활성화하는 방법은 다음과 같음  
    - 명령 팔레트 열기 (Ctrl+Shift+P)  
    - TypeScript: TypeScript 버전 선택 검색  
    - Use WorkSpace Version 선택  

### ESLint 설정  
* Next.js에는 ESLint가 내장  

* create-next-app 명령을 사용하여 새 프로젝트 생성 시 필요 패키지 자동 설치 및 적절한 설정 구성  
* 기존 프로젝트에 ESLint를 수동으로 추가하려면 packge.json에 next lint 스크립트를 다음과 같이 추가  
```javascript
    {
        "scripts": (
            "lint": "next lint"
        )
    }
```  

### Improt 및 모듈의 절대 경로 별칭 설정  
* Next.js에는 tsconfig.json 및 jsconfig.json 파일의 "paths" 및 "baseUrl" 옵션에 대한 지원을 내장  

* 이 옵션을 사용하면 프로젝트 디렉터리를 절대 경로로 별칭하여 모듈을 더 쉽고 깔끔하게 가져올 수 있음  
```javascript
import { Button } from '../../../componets/button'  
// After  
import { Button } from '@/components/button'
```  
* 별칭으로 import를 구성하려면 tsconfig.json 또는 jsconfig.json 파일의 baseUrl에 구성 옵션 추가  
```javascript
{
    "compilerOptions": {
        "baseUrl" : "src/"
    }
}  
```  
* baseUrl 경로를 구성하는 것 외에도, "paths" 옵션을 사용하여 모듈 경로를 별칭으로 사용 가능  
* "paths의 각 항목은 baseUrl의 경로애 따라 상대적

### Core Web vitals  
* LCP: 뷰포트 내에서 가장 큰 페이지 요소(큰 텍스트 블록, 이미지 또는 비디오)를 표시하는데 걸리는 시간  

* FID: 사용자가 웹페이지와 상호작용을 시도하는 첫 번쨰 순간부터 웹페이지가 응답하는 시간  
* CLS: 방문자에게 콘텐츠가 얼마나 불안정한지 측정한 값 

### 프로젝트 생성  
1. 프로젝트 이름 입력  
    - ``npx create-next-app 이름``  
2. TypeScript, ESLint, Tailwind를 사용할지 선택  
3. src/ 디렉토리 사용할지 선택  
4. App Router 사용할지 선택  
5. import alias를 사용할지 선택  
6. alias 문자 지정. 기본은 @/*  

### exlintrc.json vs eslint.config.mjs  
* JSON은 주석, 변수, 조건문 등을 쓸 수 없기 때문에 복잡한 설정이 어려움  

* mjs는 ESLint가 새롭게 도입한 방식으로, ESM 형식  
* 확장자 .mjs는 "module javaScript"를 의미  
* ESLint v9 이상에서 공식 권장 방식  
* 조건문, 변수, 동적 로딩 등 코드처럼 유연한 설정 가능  
* 다른 설정 파일을 import해서 재사용 가능  
* 프로젝트 규모가 커질수록 유지보수에 유리  
![](./img/1.png)  

### pnpm  
* pnpm은 Performant NPM의 약자로 고성능 Node 패키지 매니저다.  

* npm, yarn과 같은 목적의 패키지 관리자이지만, 디스크 공간 낭비, 복잡한 의존성 관리, 느린 설치 속도 문제 개선을 위해 개발됨  
* 하드 링크 기반의 효율적인 공간 사용  
    - 패키지를 한 번만 설치하여 글로벌 저장소에 저장하고, 각 프로젝트의 node_modules 디렉토리에는 설치된 패키지에 대한 하드링크가 생성  
* 빠른 패키지 설치 속도  
    - 이미 설치된 패키지는 다시 다운로드하지 않고 재사용하므로, 초기 설치뿐만 아니라 종속성 설치 및 업데이트 할 때도 더 빠른 속도를 경험할 수 있음  
* 엄격하고 효율적인 종속성 관리  
* 다른 패키지 매니저의 비효율성 개선  

### pnpm 설치 및 기본 명령어  
* pnpm 글로벌 설치 : $ npm install -g pnpm  
* 많이 사용하는 명령어  
    - Node-module 설치 : $ pnpm install  
    - 새로운 패키지 설치 : $ pnpm add  
    - 종속성을 최신 버전으로 업데이트 : $ pnpm update  
    - 프로젝트에 설치된 모든 패키지를 표시 : $ pnpm list  
    - 패키지 제거 : $ pnpm remove [package]  
