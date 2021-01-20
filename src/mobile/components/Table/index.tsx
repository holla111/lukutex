// import classNames from 'classnames';
import * as React from 'react';
// import {CellData} from '../../../components';
// import {CellData} from '../../../components';

export interface TableProps {
    /**
     * List of headers for table
     */
    headers?: string[];
}

const TableComponent : React.FC<TableProps> = ({headers}) => {

    const renderHead = (row: string[]) => {
        const cells = row.map((c, index) => <th key={index}>{c}</th>);

        return (
            <thead className={'cr-mobile-table__head'}>
                <tr className={'cr-mobile-table__head-row'}>{cells}</tr>
            </thead>
        );
    };

    const renderBody = () => {
        const rowElements = (
            <>
                <tr className="cr-mobile-table-info">
                    <td className="cr-mobile-table-info__name">
                        <div>
                            <h6>BTC</h6> <span>/ USDT</span>
                        </div>
                        <span>
                            Vol 1.25M
                        </span>
                    </td>
                    <td className="cr-mobile-table-info__current">
                        <h6>0.69300</h6>
                        <span>$.0.69</span>
                    </td>
                    <td className="cr-mobile-table-info__change">
                        <button className="btn btn-success">
                            +21.55%
                        </button>
                    </td>
                </tr>
                <tr className="cr-mobile-table-info">
                    <td className="cr-mobile-table-info__name">
                        <div>
                            <h6>BTC</h6> <span>/ USDT</span>
                        </div>
                        <span>
                            Vol 1.25M
                        </span>
                    </td>
                    <td className="cr-mobile-table-info__current">
                        <h6>0.69300</h6>
                        <span>$.0.69</span>
                    </td>
                    <td className="cr-mobile-table-info__change">
                        <button className="btn btn-success">
                            +21.55%
                        </button>
                    </td>
                </tr>
                <tr className="cr-mobile-table-info">
                    <td className="cr-mobile-table-info__name">
                        <div>
                            <h6>BTC</h6> <span>/ USDT</span>
                        </div>
                        <span>
                            Vol 1.25M
                        </span>
                    </td>
                    <td className="cr-mobile-table-info__current">
                        <h6>0.69300</h6>
                        <span>$.0.69</span>
                    </td>
                    <td className="cr-mobile-table-info__change">
                        <button className="btn btn-success">
                            +21.55%
                        </button>
                    </td>
                </tr>
                <tr className="cr-mobile-table-info">
                    <td className="cr-mobile-table-info__name">
                        <div>
                            <h6>BTC</h6> <span>/ USDT</span>
                        </div>
                        <span>
                            Vol 1.25M
                        </span>
                    </td>
                    <td className="cr-mobile-table-info__current">
                        <h6>0.69300</h6>
                        <span>$.0.69</span>
                    </td>
                    <td className="cr-mobile-table-info__change">
                        <button className="btn btn-success">
                            +21.55%
                        </button>
                    </td>
                </tr>
            </>

            );

        return (
            <tbody className={'cr-mobile-table__body'}>
            {rowElements}
            </tbody>
        );
    };

    return (
        <div className="cr-mobile-table-container">
            <table className="cr-mobile-table">
                {headers && headers.length && renderHead(headers)}
                {renderBody()}
            </table>
        </div>
    );
};

export const Table = React.memo(TableComponent);
