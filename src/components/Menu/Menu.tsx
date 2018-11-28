import React from 'react';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubHeader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface MenuItem {
    title: string;
    icon?: any;
    id: string | number;
    onClick?: Function;
    fold?: boolean;
    children?: MenuItem[];
}

interface MenuProps {
    menus: MenuItem[];
}

class Menu extends React.Component<MenuProps> {
    menuItemRender = (item: MenuItem, depth: number) => {
        const {children, fold, title, icon, id, onClick} = item;
        if(children && children.length > 0){
            return fold?
                <ExpansionPanel style={{boxShadow: 'none'}}>
                    <ExpansionPanelSummary style={{padding:'0',minHeight:'0'}} expandIcon={<ExpandMoreIcon />}>
                        <ListItem button key={id} style={{paddingLeft: `${depth * 24}px`}}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItem>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>{this.preRender(children, depth + 1)}</ExpansionPanelDetails>
                </ExpansionPanel>:
                <div>
                    <ListSubHeader style={{display: 'flex'}}>{title}</ListSubHeader>
                    {this.preRender(children, depth + 1)}
                </div>
        } else {
            return <ListItem button key={id} style={{paddingLeft: `${depth * 24}px`}}>
                <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} />
            </ListItem>;
        }
    }
    preRender = (menus: MenuItem[], depth: number) => {
        return <List style={{width: '100%'}}>
            {menus.map(menu => this.menuItemRender(menu, depth))}
        </List>
    }
    render() {
        const {menus} = this.props;
        return <div className='SRM-UI-MENU'>{this.preRender(menus, 0)}</div>;
    }
}

export default Menu;