
## Pages
    * `stores`
        * Header with name of company
        * `stores.all` (default for `stores`)
            * Show list of current stores
                * name, city, state
                * click to go to `store` with id
            * Link to go to `stores.add`
        * `stores.add`
            * Create new from: name, address, city, state
            * Cancel Button
            * Cancel goes back to `stores`, 
            * Submit goes to `store` with new id
    * `store`
        * Header with name, address, city, state
        * `store.pets` (default for `store`)
            * name, animal type [cat, lizard, bird, dog, fish]
            * Link to change to Add New Pet
        * `store.addPet`
            * Create new from: name
                animal type [cat, lizard, bird, dog, fish],
                (+ store id which is implicit!)
            * Either Submit or Cancel goes to `store.pets` for correct store