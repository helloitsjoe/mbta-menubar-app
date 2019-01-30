import { h, Component } from 'preact';
import { StopInfo } from './stop-info';
import { MinutesList } from './minutes-list';
import { TRANS_TIME, GREEN, RED } from '../constants';
import styled from 'styled-components';

const RouteWrapper = styled.div`
  text-align: left;
  // border-bottom: 1px solid #666;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  padding: 5px 0px;
`;

const StopWrapper = styled.div`
  padding: 10px 15px;
  flex: ${props => (props.clicked ? '0 0 13%' : '0 0 60%')};
  transition: ${TRANS_TIME};
`;

const MinsListWrapper = styled.div`
  flex: '0 0 auto';
  width: 500px;
  transition: ${TRANS_TIME};
  border-bottom: 6px solid ${props => (props.isWalkable ? GREEN : RED)};
`;

export class RouteItem extends Component {
  state = { clicked: false };

  handleClick = e => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    const {
      route: { color, textColor, stopName, direction, arrivalMins, isWalkable },
    } = this.props;
    const { clicked } = this.state;
    return (
      <RouteWrapper onClick={this.handleClick}>
        <StopWrapper clicked={clicked}>
          <StopInfo
            color={color}
            textColor={textColor}
            name={stopName}
            direction={direction}
            isCompact={clicked}
          />
        </StopWrapper>
        <MinsListWrapper isWalkable={isWalkable}>
          <MinutesList mins={arrivalMins} />
        </MinsListWrapper>
      </RouteWrapper>
    );
  }
}
