import style from "./filter.module.scss";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import Image from "next/future/image";
import { useRouter } from "next/router";

// Component for rendering filter window and manipulating filters
export default function Filter(props) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false); // Managing filter window on mobile devices
  const [selectedFilters, setFilter] = useState([]);

  // Function for controling filter window on mobile devices
  function handleResize() {
    if (window.innerWidth > 991) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  // Function for setting filter and getting new data
  function handleFilter(county) {
    const id = parseInt(county, 10);
    let route = [];

    if (selectedFilters.includes(id)) {
      route = selectedFilters.filter((item) => item !== id);
      setFilter(route);
    } else {
      route = [...selectedFilters, id];
      setFilter(route);
    }

    if (route.length > 0) {
      router.push("/wineries/?county=" + route.join("&county="), undefined, {
        shallow: true,
      });
    } else {
      router.push("/wineries", undefined, { shallow: true });
    }
  }

  // Inital render
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For setting filter checkbox on first load (maybe unoptimal)
  useEffect(() => {
    if (!!Object.keys(router.query).length) {
      if (Array.isArray(router.query.county)) {
        setFilter(router.query.county.map((number) => parseInt(number, 10)));
      } else {
        setFilter([parseInt(router.query.county, 10)]);
      }
    }
  }, [router.query.county]);

  return (
    <div id={style.filter}>
      <div className={style.heading}>
        <h2 className={style.title}>Filters</h2>
        <Image
          src="/filter.svg"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="filters"
          aria-expanded={isOpen}
          className={style.button}
          width={30}
          height={30}
          alt="filter_icon"
        />
      </div>
      <Collapse in={isOpen}>
        <div id={style.filters}>
          <div id={style.regions}>
            <p className={style.filterTitle}>County</p>
            {props.counties.map((county) => (
              <Form.Check
                type="checkbox"
                key={county.id}
                value={county.id}
                label={county.name}
                onClick={(county) => handleFilter(county.target.value)}
                defaultChecked={
                  selectedFilters.includes(county.id) ? true : undefined
                }
              />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
