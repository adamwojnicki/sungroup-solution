import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./customselect.module.css";

import cars from "@/data/cars.json";

interface Car {
  id: string;
  display_name: string;
  img: string;
}

const CustomSelect = ({ setCarModel }: { setCarModel: Function }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [carList, setCarList] = useState<Car[]>([]);

  const handleCarChange = (id: string) => {
    const car = cars.find((car) => car.id === id);
    if (car) {
      setSelectedCar(car);
      setDropdownActive(false);
      setCarModel(car.id);
    }
  };

  useEffect(() => {
    const filteredCars = cars.filter((car) => car.id !== selectedCar.id);
    setCarList(filteredCars);
  }, [selectedCar]);

  return (
    <div className={styles.customSelect}>
      {/* TODO BUTTON ARROW */}
      <button
        className={styles.selectButton}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        <Image
          src={selectedCar.img}
          alt={selectedCar.display_name}
          width={306}
          height={139}
        />
        <p>{selectedCar.display_name}</p>
      </button>
      <ul
        role="listbox"
        id="select-dropdown"
        className={`${styles.selectDropdown} ${
          dropdownActive && styles.selectDropdownActive
        }`}
      >
        {carList.map((car) => {
          return (
            <li key={car.id}>
              <input
                type="radio"
                id={car.id}
                name="carModel"
                onChange={() => handleCarChange(car.id)}
              />
              <label htmlFor={car.id} className={styles.label}>
                <Image
                  src={car.img}
                  alt={car.display_name}
                  width={306}
                  height={139}
                />
                <p>{car.display_name}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;
