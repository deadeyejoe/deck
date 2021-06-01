(ns deadeye.joe.role.core)

(defn gen-role-kw [role-name]
  (->> role-name
       (name)
       (str "role/")
       (keyword)))

(defn has-role?
  ([role-name]
   (let [role-kw (gen-role-kw role-name)]
     (fn [e] (when (role-kw e) e))))
  ([entity role-name]
   ((has-role? role-name) entity)))

(defn add-role
  ([role-name]
   (let [role-kw (gen-role-kw role-name)]
     (fn [e] (merge e {role-kw true}))))
  ([entity role-name]
   ((add-role role-name) entity)))

(defn remove-role
  ([role-name]
   (let [role-kw (gen-role-kw role-name)]
     (fn [e] (dissoc e role-kw))))
  ([entity role-name]
   ((remove-role role-name) entity)))

(defn select-role
  ([role-name]
   (let [selector (has-role? role-name)]
     (fn [coll] (some selector coll))))
  ([role-name coll]
   ((select-role role-name) coll)))

(defn change-role [role-name selector coll]
  (map (fn [entity]
         (if (selector entity)
           (add-role entity role-name)
           (remove-role entity role-name))) coll))