import React from 'react';

const ListadoClientes = ({lista}) =>{
    return <>
        <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>IdClinte</th>
            <th>ApellidoYNombre</th>
            <th>DNI</th>

          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdArticulo}>
              <td>{item.IdCliente}</td>
              <td>{item.ApellidoYNombre}</td>
              <td>{item.DNI}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
}

export default ListadoClientes;