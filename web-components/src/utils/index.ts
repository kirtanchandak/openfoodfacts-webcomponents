const reformatTagMapping = {
  " ": "-",
  "'": "-",
  "&": "",
  à: "a",
  â: "a",
  ä: "a",
  é: "e",
  è: "e",
  ê: "e",
  ë: "e",
  î: "i",
  ï: "i",
  ô: "o",
  ö: "o",
  û: "u",
  ù: "u",
  ü: "u",
}

export const reformatValueTag = (value: string) => {
  if (!value) {
    return value
  }
  let output = value.trim().toLowerCase()
  for (const [search, replace] of Object.entries(reformatTagMapping)) {
    output = output.replace(new RegExp(search, "g"), replace)
  }
  output = output.replace(/-{2,}/g, "-")
  return output
}

export const removeEmptyKeys = (obj: Record<string, any>) => {
  Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] === "") && delete obj[key])
  return obj
}

//  Only for testing purpose
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

//to provide capitalised country name; en:france => France
export const capitaliseName = (string: string | undefined) => {
  if (!string) {
    return string
  }
  const name = string.slice(3)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export const paramsToUrl = (params: Record<string, any>) => {
  return new URLSearchParams(params).toString()
}

export const addParamsToUrl = (url: string, params: Record<string, any>) => {
  if (url.includes("?")) {
    return `${url}&${paramsToUrl(params)}`
  }
  return `${url}?${paramsToUrl(params)}`
}

// Function to delay the execution of a function
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const isNullOrUndefined = (value: any) => value === null || value === undefined
