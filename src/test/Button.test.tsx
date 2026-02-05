import { Button } from "../components/Button";

import { render,screen,fireEvent } from "@testing-library/react";
import { describe,it,expect, vi } from "vitest";

describe("Button",()=>{
    it("render levels",()=>{
        const onClick=vi.fn();
        render(<Button label="sample" onClick={onClick}/>);
        const buttonLabel=screen.getByRole("button",{name:"sample"});
        expect(buttonLabel).toBeDefined();
        expect(buttonLabel).toBeInTheDocument();       

    });

    it("calls callback",()=>{
        const onClick=vi.fn();
        render(<Button label="sample" onClick={onClick}/>)
        const button=screen.getByRole("button",{name:"sample"});
        expect(button).toBeDefined();
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledOnce();
    })
})