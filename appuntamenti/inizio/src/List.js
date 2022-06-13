import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const List = (props) => {
  return (
    <ul>
      {props.data.map((person) => {
        return (
          <li
            key={person.id}
            style={{
              padding: '5px',
              margin: '10px',
              border: '1px solid white',
            }}
          >
            <Person {...person} deletePerson={props.deletePerson}></Person>
          </li>
        );
      })}
    </ul>
  );
};

const Person = React.memo(({ id, name, state, img, deletePerson }) => {
  return (
    <article>
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{state}</p>
        <button onClick={() => deletePerson(id)}>
          <RiDeleteBin5Line style={{ fontSize: '20px' }} />
        </button>
      </div>
    </article>
  );
});

export default List;
