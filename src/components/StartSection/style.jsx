import { styled } from 'styled-components'

export const StyledStartSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  .content {
    position: relative;
    display: flex;
    align-items: center;
  }

  .background-grey,
  .background-black {
    position: absolute;
    width: 80px;
    height: 280px;
    border-radius: 30px;
    background-color: var(--grey);
    transform: rotate3d(0, 0, -10, 15deg);
    z-index: -1;
  }
  .background-grey {
    animation: showBg 5s alternate ease-in-out;
  }

  .background-black {
    background-color: var(--dark);
    transform: rotate3d(0, 0, -10, 5deg);
    animation: showBg 8s alternate ease-in-out;
  }
  @keyframes showBg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
