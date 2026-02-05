import { describe,it,expect, vi } from "vitest";
import {  render,screen } from "@testing-library/react";
// import {  fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe("testing on App Componenet",()=>{
    it("should render the app with current initial state",()=>{
        render(<App/>)
        screen.debug(undefined,100000000)
    });

    // it.skip("should render app name prop",()=>{
    //     render(<App name="WanderLust"/>)
    //     const heading= screen.getByText("WanderLust");

    //     expect(heading).toBeDefined();
    // })
    it.skip("should incerment the count by one on button click",async ()=>{
        render(<App/>)
        const initialCount=screen.getByRole("heading",{name:"0"});
        expect(initialCount).toBeDefined();
        const button=screen.getByRole("button", {name:"Increment"});
        expect(button).toBeDefined();
        await userEvent.click(button);
        // fireEvent.click(button);
        const updatedCount= await screen.findByRole("heading", {name: "1"});
        expect(updatedCount).toBeDefined();

    })

    it.only("should be fetch the user data", async()=>{

        //Mocking the fetch API     
        vi.spyOn(globalThis, "fetch").mockResolvedValue({
            json:async ()=>({name:"Leanne Graham"})
        }as Response);

        render(<App/>);
        const button=screen.getByRole("button",{name:"Fetch User"});
        expect(button).toBeDefined();
        await userEvent.click(button);
        const userName= await screen.findByRole("heading",{name:"Leanne Graham"});
        expect(userName).toBeDefined();
        expect(userName).toBeInTheDocument();
    
    })



})