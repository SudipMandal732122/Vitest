import { screen,render } from '@testing-library/react';
import { vi,it,describe,expect } from 'vitest';

import { UserProfile } from '../components/UserProfile';
import { fetchUser } from '../api/userApi';

//Mock the entire module
vi.mock("../api/userApi",()=>({
    fetchUser:vi.fn(),
}));

describe("UserProfile",()=>{
        it("should render user name and id from api", async ()=>{
            //acces to mocked function and resolved it      
            vi.mocked(fetchUser).mockResolvedValue({
                id:2,
                name:"sudip",
            });

            render(<UserProfile/>);

            const name= await screen.findByRole("heading",{name:"UserName:sudip"});
            expect(name).toBeDefined();
            expect(name).toBeInTheDocument();

            const id=await screen.findByRole("heading",{name:"UserId:2"});
            expect(id).toBeDefined();
            expect(id).toBeInTheDocument();

            
        })
})
