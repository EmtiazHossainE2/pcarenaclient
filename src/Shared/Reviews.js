import React from 'react';
import { Accordion } from 'flowbite-react';
const Reviews = (reviews) => {
    return (
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>
                  What is Flowbite?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    <p>
                      Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </p>
                 
                </Accordion.Content>
              </Accordion.Panel>
            
            </Accordion>
          )
        }
        
        
        
    


export default Reviews;