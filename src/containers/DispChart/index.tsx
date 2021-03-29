import * as React  from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
export const DispChart: React.FC<any> = (props: any) => {

  const Chart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: transparent;
    min-height: 150px;
    border-radius: 20px;

  `;
  const ChartWrap = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
  `;
  const ChartItems = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 210px;
      min-height: 130px;
      border-radius: 10px;
      background-color: transparent;
      :hover{
        background-color: #21295c;
      }
  `;

  const AllChart = styled.button`
    background-color: #21295c;
    height: 50px;
    width: 100px;
    outline: none;
    border: darkseagreen;
    border-radius: 4px;
    .Link{
      color: white;
    }
    :hover{
      background-color: #3a365b;
      color: #fff;
    }
  `;

  const renderChart = () => {
    return (
      <Chart>
        <ChartWrap>
          <ChartItems>
              <div className="d-flex flex-direction: row mt-(5)">
                <div className="h4">LKT/USDT</div>
                <div className="ml-5">+1.333333</div>
              </div>
              <div className="price">0.6667</div>
              <div className="chart"></div>
          </ChartItems>
          <ChartItems>
              <h1>chart</h1>
          </ChartItems>
          <ChartItems>
              <h1>chart</h1>
          </ChartItems>
        </ChartWrap>
        <div className="mr-5">
          <AllChart>
            <Link style={{color: 'white'}} to=''>View All</Link>
          </AllChart> 
        </div>
      </Chart>
    );
  }

  return(
    <React.Fragment>
      {renderChart()}
    </React.Fragment>
  )
}