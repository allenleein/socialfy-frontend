import React from 'react';
import styled from 'styled-components';

import ProfileSearchResult from './Item';

import config from '../../config';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: ${config.spacing}px;
  border-radius: 8px;
  background-color: ${config.colors.backgroundSecondary};

  > ul {
    list-style: none;
  }
`;

const ProfileSearchResults = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ProfileSearchResults, ProfileSearchResult };
