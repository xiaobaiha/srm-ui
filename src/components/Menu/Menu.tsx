import React from 'react';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubHeader from '@material-ui/core/ListSubheader';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
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
    theme?: 'light' | 'dark';
}

interface MenuState {
    activeId?: string | number;
}

class Menu extends React.Component<MenuProps, MenuState> {
    static defaultProps = {
        theme: 'light'
    }

    constructor(props: MenuProps) {
        super(props);
        this.state = {
            activeId: undefined
        }
    }

    findItemClick = (id: string|number, menus: MenuItem[]) => {
        let temp = menus.slice(0);
        let item = temp.shift();
        while(item) {
            if (item.id === id){
                return item.onClick;
            } else if(item.children && item.children.length){
                temp = temp.concat(item.children);
            }
            item = temp.shift();
        }
    }

    handleItemClick = (id: string|number) => {
        this.setState({activeId: id});
        const onClick = this.findItemClick(id, this.props.menus);
        onClick && onClick(id);
    }

    menuItemRender = (item: MenuItem, depth: number) => {
        const {children, fold, title, icon, id} = item;
        const Icon = icon;
        const {activeId} = this.state;

        if(children && children.length > 0){
            return fold?
                <ExpansionPanel style={{boxShadow: 'none'}}>
                    <ExpansionPanelSummary style={{padding:'0',minHeight:'0'}} expandIcon={<ExpandMoreIcon />}>
                        <ListItem 
                            className={activeId===id?'active':'listItem'} 
                            button 
                            key={id} 
                            style={{paddingLeft: `${depth * 24}px`, fontSize: '1rem'}}
                            >
                            {Icon? <Icon style={{marginLeft: '0.5rem'}} />: null}{title}
                        </ListItem>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>{this.preRender(children, depth + 1)}</ExpansionPanelDetails>
                </ExpansionPanel>:
                <div>
                    <ListSubHeader className="subHeader" style={{display: 'flex', paddingLeft: `${depth * 24}px`, fontSize: '1rem', alignItems: 'center'}}>
                        {Icon? <Icon style={{marginLeft: '0.5rem'}} />: null}{title}
                    </ListSubHeader>
                    {this.preRender(children, depth + 1)}
                </div>
        } else {
            return <ListItem 
                className={activeId===id?'active':'listItem'} 
                button 
                key={id} 
                style={{paddingLeft: `${depth * 24}px`, fontSize: '1rem'}}
                onClick={() => this.handleItemClick(id)}
                >
                {Icon? <Icon style={{marginLeft: '0.5rem'}} />: null}{title}
            </ListItem>;
        }
    }
    preRender = (menus: MenuItem[], depth: number) => {
        const {theme} = this.props;
        return <List style={{width: '100%'}} className={theme}>
            {menus.map(menu => this.menuItemRender(menu, depth))}
        </List>
    }
    render() {
        const {menus} = this.props;
        return <div className='SRM-UI-MENU'>{this.preRender(menus, 0)}</div>;
    }
}

export default Menu;