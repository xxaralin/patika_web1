import {render, screen,fireEvent} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import App from "./App"

describe("emoji tests",()=>{
    let baslik, initiallist,input, filteredlist,copiedemoji;

    beforeEach(()=>{
        render(<App/>);      
        
    })
    
    test("başlık render ediliyor mu",()=>{
        baslik=screen.getByText(/Emoji Search/i);
        expect(baslik).toBeInTheDocument();

    })

    test("initial list render ediliyor mu",()=>{
        initiallist=screen.getAllByText(/click to copy emoji/i)
        expect(initiallist.length).toEqual(20);

    })

    test("filtreleme sonrası render doğru mu",()=>{
        const emoji = "Snowflake";
        const input = screen.getByRole("input");
        fireEvent.change(input, { target: { value: emoji } });
    
        expect(screen.getByText(emoji)).toBeInTheDocument();
    
    

    })

     test("onclickte dopru emoji kopyalanmış mı",()=>{
        const click = screen.getAllByText("Click to copy emoji").at(0);
        const parent = click.parentElement;
        expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
          0
        );
     })
})