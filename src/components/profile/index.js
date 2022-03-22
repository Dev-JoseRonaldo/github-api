import React from "react";
import * as S from './styled';

const profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://picsum.photos/200"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>José Ronaldo</h1>
          <S.WrapperUsername>
            <h3>userName:</h3>
            <a
              href="http://github.com/dev-joseronaldo"
              target="_blank" rel="noreferrer"
            >
              Ronaldo
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>

  );
};

export default profile;