"use client"
import { CategoryType } from '@/Schemas/CategorySchema'
import { formatDate } from '@/utils'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'

export default function CategoryList({ categories }: { categories: CategoryType[] }) {

    const columns = [
        { name: "Tag" },
        { name: "Nombre" },
        { name: "Descripción" },
        { name: "Fecha Agregado" },
        { name: "Acciones" },
    ]

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', background: "none", boxShadow: "none" }}>
            <TableContainer sx={{maxHeight: 900}} className='my-4 border border-gray-300 rounded-2xl'>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="Tabla de Categorías" className='bg-white'>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.name}
                                    sx={{ color: 'white', fontWeight: 'bold', textTransform: "uppercase", backgroundColor: "#45556c" }}
                                >
                                    {column.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {categories.map(category => (
                            <TableRow hover key={category.id}>
                                <TableCell>
                                    <div className="inline-flex items-center justify-center rounded-4xl bg-violet-400/20 w-10 h-10 mb-2">
                                        <i className="bi bi-tag-fill text-violet-400 text-2xl"></i>
                                    </div>
                                </TableCell>
                                <TableCell sx={{ color: "#45556c", fontWeight: "bold", fontSize: 15 }}>{category.name}</TableCell>
                                <TableCell sx={{ color: "#45556c", fontSize: 15 }}>{category.description}</TableCell>
                                <TableCell sx={{ color: "#45556c", fontSize: 15 }}>{formatDate(category.created_at)}</TableCell>
                                <TableCell sx={{ color: "#45556c", fontSize: 15 }}>
                                    <div className="flex gap-8 mr-4">

                                        <a href={`/admin/categories/edit/${category.id}`} title="Editar categoría" className="text-blue-500 hover:text-blue-700 transition">
                                            <i className="bi  bi-pencil-fill text-2xl text-slate-400 hover:text-violet-500 cursor-pointer"></i>
                                        </a>


                                        <button
                                            // onClick={() => {
                                            //     // Captura el ID para eliminación, puedes manejar lógica aquí o con un handler externo
                                            //     if (confirm("¿Estás seguro que deseas eliminar esta categoría?")) {
                                            //         // Aquí puedes despachar acción, llamar función, o navegar, según preferencia
                                            //         // Ejemplo: deleteCategory(category.id)
                                            //         // Por ahora solo imprime el id:
                                            //         // console.log("Eliminar ID:", category.id);
                                            //     }
                                            // }}
                                            title="Eliminar Categoría"
                                            className="text-red-500 hover:text-red-700 transition"
                                        >
                                            <i className="bi bi-trash-fill text-2xl text-slate-400 hover:text-red-500 cursor-pointer"></i>
                                        </button>
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={0}
                rowsPerPage={0}
                page={0}
                onPageChange={()=>{""}}
                onRowsPerPageChange={()=>{""}}
            />
        </Paper>
    )
}
