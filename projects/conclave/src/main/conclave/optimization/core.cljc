(ns conclave.optimization.core)


(def steps [[:prepare-layout
             :calculate-slices]
            [:generate-tileset
             :handle-includes
             :satisfy-res-inf-requirements]
            [:allocate-slices
             :satisfy-balance-requirements]
            [:optimize-map]])
