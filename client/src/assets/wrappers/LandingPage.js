import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    float: right;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    text-align: right;
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    text-align: right;
    color: var(--grey-600);
    font-size: medium;
  }
  .main-img {
    display: none;
    float: right;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
