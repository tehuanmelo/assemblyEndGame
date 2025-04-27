
export function fareWellMessage(language) {
    const option = [
      `rest in peace ${language}`,
      `goodbye ${language}`,
      `farewell ${language}`,
      `see you again ${language}`,
      `until we meet again ${language}`,
      `safe travels ${language}`,
      `sweet dreams ${language}`,
      `sleep well ${language}`,
      `rest easy ${language}`,
      `journey well ${language}`,
      `may you find peace ${language}`,
      `gone but not forgotten ${language}`,
      `eternal rest ${language}`,
      `so long ${language}`,
      `you will be missed ${language}`,
      `in loving memory ${language}`,
      `always in our hearts ${language}`,
      `may your soul find rest ${language}`,
      `departed but remembered ${language}`,
      `forever in peace ${language}`
    ]
    const randomIndex = Math.floor(Math.random() * option.length)
    return option[randomIndex]
  }

  export function getRandomWord() {
    const option = [
        "algorithm", "array", "API", "application", "argument", "backend", "binary",
        "bug", "build", "branch", "boolean", "class", "code", "compile", "command",
        "constant", "condition", "constructor", "closure", "client", "callback",
        "database", "debug", "deploy", "dependency", "development", "DNS", "DOM",
        "dynamic", "encryption", "element", "endpoint", "event", "exception", "expression",
        "framework", "frontend", "function", "for-loop", "fullstack", "git", "graph",
        "hash", "HTML", "HTTP", "HTTPS", "inheritance", "instance", "interface",
        "iteration", "JavaScript", "JSON", "key", "library", "logic", "loop",
        "memory", "method", "middleware", "module", "mutation", "node", "null",
        "object", "operator", "optimization", "package", "parameter", "parsing",
        "patch", "pointer", "program", "property", "protocol", "queue", "recursion",
        "refactor", "repository", "return", "runtime", "script", "server", "session",
        "stack", "statement", "string", "syntax", "thread", "token", "type",
        "variable", "version", "virtual", "value", "while-loop", "webpack", "wrapper",
        "XML"
        ]
    const randomIndex = Math.floor(Math.random() * option.length)
    return option[randomIndex]
  }
