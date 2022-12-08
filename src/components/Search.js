import { FormControl, InputGroup, DropdownButton,Dropdown} from "react-bootstrap"
import { BsCheck2 } from "react-icons/bs"

const DropDown = ({ sortBy, onsortByChange, orderBy, onOrderByChange })=>{
    return(
        <>
            <DropdownButton
                variant="info"
                title="sort"
                id="input-group-dropdown-3">
                <Dropdown.Item href="#" onClick={()=>onsortByChange("firstname")}>First Name{(sortBy=='firstname')&&<BsCheck2 className="float-end"/>}</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => onsortByChange("lastname")}>Last Name{(sortBy == 'lastname')&&<BsCheck2 className="float-end" />}</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => onsortByChange("aptDate")}>Date{(sortBy == 'aptDate')&&<BsCheck2 className="float-end" />}</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#" onClick={() => onOrderByChange("asc")}>ASC{(orderBy == 'asc')&&<BsCheck2 className="float-end" />}</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => onOrderByChange("desc")}>DESC{(orderBy == 'desc')&&<BsCheck2 className="float-end" />}</Dropdown.Item>

            </DropdownButton>
        </>
    )
}

const Search = ({ query, onQueryChange, sortBy, onsortByChange, orderBy, onOrderByChange })=>{
return(
<>
    <InputGroup className="mb-3">
        <FormControl placeholder="Search" onChange={(event)=>{
            onQueryChange(event.target.value)
        }}  value={query}/>
        <DropDown
                
                orderBy={orderBy}
                onOrderByChange={mysort => onOrderByChange(mysort)}
                sortBy={sortBy}
                onsortByChange={mysort => onsortByChange(mysort)} />
       
    </InputGroup>
</>
)
}

export default Search;