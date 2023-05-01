import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinksTable = () => {
  return (
    <div className="">
      <Table responsive="sm" borderless={true}>
        <thead>
          <tr>
            <th>
              {" "}
              <Link className="link" to="services">
                Buying{" "}
              </Link>
            </th>
            <th>
              {" "}
              <Link className="link" to="services">
                Financing{" "}
              </Link>
            </th>
            <th>
              {" "}
              <Link className="link" to="services">
                Selling{" "}
              </Link>
            </th>
            <th>
              {" "}
              <Link className="link" to="services">
                Home Services{" "}
              </Link>
            </th>
            <th>
              <Link className="link" to="properties">
                Properties{" "}
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Personal Home</td>
            <td>Bank Loans</td>
            <td>Explore Options</td>
            <td>Home Estimate</td>
          </tr>
          <tr>
            <td>Investment Peoperty</td>
            <td></td>
            <td>Find Agent</td>
            <td>Inspection</td>
          </tr>
          <tr>
            <td>Commercial Real Esate</td>
            <td></td>
            <td>Post for Sale</td>
            <td>Cleaning</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default LinksTable;
