import React from "react";
import ReactDOM from "react-dom";
import { Appointment, AppointmentsDayView } from "../src/Appointment";

describe("Appointment", () => {
  let customer;
  let container;
  const render = (component) => ReactDOM.render(component, container);
  beforeEach(() => {
    container = document.createElement("div");
  });

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders another customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch("Jordan");
  });
});

describe("AppointmentsDayView", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) },
  ];

  const render = (component) => ReactDOM.render(component, container);
  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
  });
});
