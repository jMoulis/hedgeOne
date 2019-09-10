/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Button } from './Templates';
import { Ul, Li } from './Element';

const Root = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  background-color: #fff;
  min-width: 50%;
`;
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  close: Function;
  entity: string;
  selectItem: Function;
  displayedKey: string;
  linkId: number;
}
const Modal: FunctionComponent<Props> = ({
  children,
  close,
  entity,
  selectItem,
  displayedKey,
  linkId,
}) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: 'get',
          url: `data/${entity}.json`,
        });
        setData(response);
      } catch (err) {
        console.error(err.message);
      }
    };
    if (entity) {
      fetchData();
    }
  }, [entity]);

  return (
    <Root>
      <Content>
        <Header>
          <Button
            type="button"
            onClick={() => close()}
            bgColor="red"
            color="white"
            width="2"
            height={2}
            radius={200}
          />
        </Header>
        <Ul>
          {data.map((item: any) => {
            if (item) {
              return (
                <Li
                  key={item.guid}
                  onClick={() => {
                    selectItem({
                      entity,
                      name: item[displayedKey],
                      value: 3000,
                      link: [linkId],
                      ...item,
                    });
                    close();
                  }}
                >
                  {item[displayedKey]}
                </Li>
              );
            }
            return null;
          })}
        </Ul>
        {children}
      </Content>
    </Root>
  );
};

Modal.propTypes = {};

export default Modal;
