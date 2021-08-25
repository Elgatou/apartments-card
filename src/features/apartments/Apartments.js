import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectApartments, selectStatus, getAppartmenst, toggleLike } from './apartmentsSlice';
import styles from './Apartments.module.css';
import placeholder from '../../placeholder.png';
import { Like } from './Like';

export function Apartments() {
  const apartments = useSelector(selectApartments);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const cities = { Tyumen: 'Тюмень' };
  const vendor = { agent: 'Агент' };

  useEffect(() => {
    dispatch(getAppartmenst());
  }, []);

  return (
    <div className={styles.wrapper}>
      {status === 'loading' && <span>Загрузка...</span>}
      {apartments.map((e, i) => {
        const address = e.attributes.address;
        const relationships = e.relationships;
        const name = relationships.attributes;

        return (
          <div className={styles.card} key={e.id}>
            <img width="200px" height="200px" alt="placeholder" src={placeholder} />
            <div className={styles.info}>
              <h1>{e.attributes.title}</h1>
              <p>
                {e.attributes.rooms} комнаты, {e.attributes.area} {e.attributes.unit}
              </p>
              <p>
                {cities[address.city]}, улица {address.street}, {address.house}, кв. {address.room}
              </p>
              <p>
                {vendor[relationships.type]} {name.first_name} {name.last_name} {name.middle_name}
              </p>
              <div onClick={() => dispatch(toggleLike(i))} className={styles.like}>
                <Like isActive={e.like} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
