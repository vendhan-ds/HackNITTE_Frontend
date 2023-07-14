import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core'
import { HeaderTabs } from "../../Components/header";

const ComingSoon=()=>{
    return(
        <div>
            <HeaderTabs></HeaderTabs>
            <div style={{margin:"auto",paddingTop:"20%"}}>
            <Text size={50} fw={700}>
                Coming Soon....
            </Text>
        </div>
        </div>
        
    )
}

export default ComingSoon