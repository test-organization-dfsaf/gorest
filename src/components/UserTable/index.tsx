import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { fetchUsers } from '../../api/registration';
import Alert from '../Alert';
import Card from '../Card';
import Col from '../layout/Col';
import Container from '../layout/Container';
import Row from '../layout/Row';
import { UserListType } from '../../types';

interface IUserTableProps {
  title: string;
}

const UserTable = ({ title }: IUserTableProps): JSX.Element => {
  const [userList, setUserList] = useState<UserListType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const getUserList = useCallback(async () => {
    if (!isLoading) return;
    await fetchUsers().then((res) => {
      setUserList(res);
    }).catch((err: any) => {
      setErrorMessage(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
    if (!userList) {
      getUserList();
    }
  }, [getUserList, userList]);

  const users = useMemo(
    () => {
      if (!userList) return <></>;
      // table
      return userList.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
        </tr>
      ));
    },
    [userList],
  );

  return (
    <Card>
      <Container>
        <Row>
          <Col sm={12}>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              {users}
            </table>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Alert message={errorMessage} show={!!errorMessage} />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default UserTable;
