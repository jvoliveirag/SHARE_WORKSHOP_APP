export function Footer() {

  return (
    <div>
      <p className="text-sm text-muted-foreground hidden items-center justify-center md:flex md:gap-1">
        Desenvolvido por <a href='https://www.linkedin.com/in/joaov-oliveira/' className="underline text-violet-400">João Victor</a>| Workshop SHARE, 2024. Todos os direitos reservados.
      </p>
      <p className="text-xs text-muted-foreground md:hidden text-center align-baseline mb-4">
        Desenvolvido por <a href='https://www.linkedin.com/in/joaov-oliveira/'><code className="text-violet-400">{'{João Victor}'}</code></a>, Workshop SHARE, 2024. Todos os direitos reservados.
      </p>
    </div>
  )
}