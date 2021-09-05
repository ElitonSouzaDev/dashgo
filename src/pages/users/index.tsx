import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tr,
  Thead,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiEditLine } from "react-icons/ri";

import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/SideBar";
export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.users);
      });
  }, []);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon fontSize="20" as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width="8">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userList.length >0 && userList.map((user) => {
                return (
                  <Tr key={user.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontSize="sm" color="gray.300">
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td px={["4", "4", "6"]}>{Intl.DateTimeFormat().format(new Date(user.createdAt))}</Td>}
                    <Td px={["4", "4", "6"]}>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon fontSize="16" as={RiEditLine} />}
                      >
                        {isWideVersion && "Editar"}
                      </Button>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
