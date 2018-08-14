const localStorage = global.window.localStorage

export function get (key) {
  return localStorage.getItem(key)
}

export function set (key, value) {
  console.log('setting token with key: ' + key + ', and value: ' + value) // NOTE: gets set correctly the first time, then 'refreshes' -- set as null????

  if(value === null) {
    localStorage.removeItem(key)
  } else {
    localStorage.setItem(key, value)
  }
}
