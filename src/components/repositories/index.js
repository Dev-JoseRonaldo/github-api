import React from "react";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTab
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Reposiories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

    </S.WrapperTab>

  );
};

export default Repositories;