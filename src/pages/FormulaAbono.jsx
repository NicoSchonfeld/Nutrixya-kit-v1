import React, { useEffect, useState } from "react";
import { ApiDefaultUsers } from "../api/indext";
import { useLocalStorage } from "../api/useLocalStorage";

const FormulaAbono = () => {
  const { PostUsersRegister, PostUsersLogin, PostUsersEdit } =
    ApiDefaultUsers();

  const [token, settoken] = useLocalStorage("token", "");
  

  const TestPostUsersLogin = async () => {
    const email = "carlos@gmail.com";
    const password = "123456";

    const resultado = await PostUsersLogin(email, password);

    if (!resultado) {
      console.log("Error");
    } else {
      const { data } = resultado;
      console.log(data);
      console.log("fin de la ejecucion");
      settoken(data.token);

      const resultadoEdit = await PostUsersEdit(
        data._id,
        "dragon2",
        email,
        data.token
      );
    }
  };
  useEffect(() => {
    TestPostUsersLogin();
  }, []);
  return <h1>FormulaAbono test 2</h1>;
};

export default FormulaAbono;
