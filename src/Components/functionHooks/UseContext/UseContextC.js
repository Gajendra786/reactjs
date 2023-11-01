import React from 'react'
import { DataContext,CountContext } from './UseContextA'


const UseContextC = () => {
  return (
    <DataContext.Consumer>
        {
            (name)=>{
                return(
                    <div>
                        <CountContext.Consumer>
                            {
                                (count)=>{
                                    return(
                                        <div>name:{name},count:{count}</div>
                                    )
                                }
                            }
                        </CountContext.Consumer>
                    </div>
                )
            }
        }
    </DataContext.Consumer>
  )
}

export default UseContextC